import React, { useState, useEffect } from "react";
import Alerta from "../components/Alerta";
import { Link, useParams } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const NuevoPass = () => {
  const [passModificado, setPassModificado] = useState(false);
  const [pass, setPass] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { token } = params;
  console.log(token);
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`);
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    return () => {
      comprobarToken();
    };
  }, []);

  const { msg } = alerta;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass.length < 6) {
      setAlerta({
        msg: "El password debe tener como mínimo 6 caracteres",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post(
        `/usuarios/olvide-password/${token}`,
        { password: pass }
      );
      console.log(data);
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setPassModificado(true);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Reestablece tu password y no pierdas acceso a tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      {tokenValido && !passModificado && (
        <form
          action=""
          className="my-10 bg-white shadow rounded-lg p-10"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Nuevo Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Escribe tu nuevo Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Confirmar Nuevo Password"
            className="bg-sky-700 w-full mb-5 uppercase text-white py-3 rounded font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>
      )}
      {passModificado && (
        <Link
          to="/"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          Inicia Sesion
        </Link>
      )}
    </>
  );
};

export default NuevoPass;
