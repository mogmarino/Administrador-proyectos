import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from "axios";

const OlvidePass = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const cond = pattern.test(email);

    if (email === "") {
      setAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
      return;
    }

    if (!cond) {
      setAlerta({
        msg: "El formato del email no es válido",
        error: true,
      });
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/usuarios/olvide-password`,
        { email }
      );
      console.log(data.msg);
      setAlerta({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      console.log(error.response.data.msg);
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Recupera tu acceso y no pierdas tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        action=""
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Enviar instrucciones"
          className="bg-sky-700 w-full mb-5 uppercase text-white py-3 rounded font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/registrar"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          ¿No tienes una cuenta? Registrate
        </Link>
        <Link
          to="/"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          ¿Ya tienes una cuenta? Inicia Sesion
        </Link>
      </nav>
    </>
  );
};

export default OlvidePass;
