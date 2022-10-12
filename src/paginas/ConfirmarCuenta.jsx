import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Alerta from "../components/Alerta";
import { useParams, Link } from "react-router-dom";

const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const params = useParams();

  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/usuarios/confirmar/${id}`;
        const { data } = await axios(url);
        console.log(data);
        setAlerta({
          msg: data.msg,
          error: false,
        });
        setCuentaConfirmada(true);
      } catch (error) {
        console.log(error);
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    /**
     * se hace el llamado a la funcion de esta manera para evitar un re-render del componente.
     * Tambien se puede evitar el re-render quitando StrictMode por un fragment (<></>) dentro del main
     */
    return () => {
      confirmarCuenta();
    };
  }, []);

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirma tu cuenta y comienza a crear tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}{" "}
        {cuentaConfirmada && (
          <Link
            to="/"
            className="block text-center my-5 text-slate-500 uppercase text-sm"
          >
            Inicia Sesion
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
