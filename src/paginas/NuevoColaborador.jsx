import React, { useEffect } from "react";
import FormularioColaborador from "../components/FormularioColaborador";
import { useProyectos } from "../hooks/useProyectos";
import { useNavigate, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";

const NuevoColaborador = () => {
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    colaborador,
    agregarColaborador,
    alerta,
  } = useProyectos();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  if (!proyecto?._id) return <Alerta alerta={alerta} />;

  // const { msg } = alerta;

  const redirect = () => {
    navigate(`/proyectos/${params.id}`);
  };

  const handleClick = () => {
    agregarColaborador({
      email: colaborador.email,
    });
    setTimeout(() => {
      redirect();
    }, 3000);
  };

  return (
    <>
      <h1 className="text-4xl font-black">
        Añadir Colaborador(a) al proyecto: {proyecto.nombre}
      </h1>
      <div className="mt-10 flex justify-center">
        {/* {msg && <Alerta alerta={alerta} />} */}
        <FormularioColaborador />
      </div>
      {cargando ? (
        <p className="text-center">Cargando...</p>
      ) : (
        colaborador?._id && (
          <div className="flex justify-center mt-10">
            <div className="bg-white py-10 px-5 md:w-96 lg:w-1/2 rounded-lg shadow">
              <h2 className="text-center mb-10 text-2xl font-bold">
                Resultado:
              </h2>

              <div className="flex justify-between items-center">
                <p>{colaborador.nombre}</p>
                <button
                  type="button"
                  className="bg-slate-500 hover:bg-slate-700 px-5 py-2 rounded-lg uppercase text-white font-bold text-sm"
                  onClick={handleClick}
                >
                  Agregar al proyecto
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default NuevoColaborador;
