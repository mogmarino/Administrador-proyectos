import React from "react";
import { useProyectos } from "../hooks/useProyectos";

const Colaborador = ({ colaborador }) => {
  const { handleModalEliminarColaborador } = useProyectos();
  const { nombre, email } = colaborador;
  return (
    <div className="border-b p-5 flex justify-between">
      <div>
        <p>{nombre}</p>
        <p className="text-sm text-gray-700">{email}</p>
      </div>
      <div>
        <button
          type="button"
          className="bg-red-400 hover:bg-red-600 uppercase font-bold text-white text-sm rounded-lg px-4 py-3"
          onClick={() => handleModalEliminarColaborador(colaborador)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Colaborador;
