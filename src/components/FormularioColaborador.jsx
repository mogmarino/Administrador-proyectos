import React, { useState } from "react";
import { useProyectos } from "../hooks/useProyectos";
import Alerta from "./Alerta";

const FormularioColaborador = () => {
  const [email, setEmail] = useState("");

  const { alerta, mostrarAlerta, submitColaborador } = useProyectos();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      mostrarAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
      return;
    }

    submitColaborador(email);
  };

  const { msg } = alerta;
  return (
    <form
      className="bg-white  py-10 px-5 rounded-lg shadow w-full lg:w-1/2"
      onSubmit={handleSubmit}
    >
      {msg && <Alerta alerta={alerta} />}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Email Colaborador
        </label>
        <input
          type="email"
          id="email"
          className="border-2 w-full p-2 mt-2 mb-2 placeholder-gray-400 rounded-md"
          placeholder="Nombre de la Tarea"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-sm cursor-pointer w-full font-bold p-3 text-white uppercase rounded-lg transition-colors mt-3"
          value="Buscar Colaborador"
        />
      </div>
    </form>
  );
};

export default FormularioColaborador;
