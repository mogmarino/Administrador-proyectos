import React, { useState, useEffect } from "react";
import axios from "axios";
import Alerta from "../components/Alerta";
import { Link, useParams } from "react-router-dom";

const NuevoPass = () => {
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { token } = params;
  console.log(token);
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        // TODO: mover hacia un cliente axios
        await axios(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/usuarios/olvide-password/${token}`
        );
        setTokenValido(true);
      } catch (error) {
        console.log(error.response);
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
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Reestablece tu password y no pierdas acceso a tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      {tokenValido && (
        <form action="" className="my-10 bg-white shadow rounded-lg p-10">
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
            />
          </div>

          <input
            type="submit"
            value="Confirmar Nuevo Password"
            className="bg-sky-700 w-full mb-5 uppercase text-white py-3 rounded font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>
      )}
    </>
  );
};

export default NuevoPass;
