import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProyectos } from "../hooks/useProyectos";
import FormularioProyecto from "../components/FormularioProyecto";

const EditarProyecto = () => {
  const params = useParams();
  const { id } = params;
  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  useEffect(() => {
    return () => {
      obtenerProyecto(id);
    };
  }, []);

  console.log(proyecto);

  const { nombre } = proyecto;

  if (cargando) return "Cargando...";

  return (
    <>
      <h1 className="font-black text-4xl">Editar Proyecto: {nombre}</h1>
      <div className="mt-10 flex justify-center">
        <FormularioProyecto />
      </div>
    </>
  );
};

export default EditarProyecto;
