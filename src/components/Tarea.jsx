import React from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import { useProyectos } from "../hooks/useProyectos";

const Tarea = ({ tarea }) => {
  const { handleModalEditarTarea, handleModalEliminarTarea } = useProyectos();
  const { nombre, descripcion, fechaEntrega, prioridad, estado } = tarea;
  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div>
        <p className="mb-1 text-xl">{nombre}</p>
        <p className="mb-1 text-sm uppercase text-gray-500">{descripcion}</p>
        <p className="mb-1 text-sm">{formatearFecha(fechaEntrega)}</p>
        <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
      </div>
      <div className="flex gap-3">
        <button
          className="bg-indigo-400 hover:bg-indigo-600 text-sm font-bold uppercase px-4 py-3 text-white rounded-lg"
          onClick={() => handleModalEditarTarea(tarea)}
        >
          Editar
        </button>
        {estado ? (
          <button className="bg-sky-600 text-sm font-bold uppercase px-4 py-3 text-white rounded-lg">
            Completa
          </button>
        ) : (
          <button className="bg-gray-400 hover:bg-gray-600 text-sm font-bold uppercase px-4 py-3 text-white rounded-lg">
            Incompleta
          </button>
        )}

        <button
          className="bg-red-400 hover:bg-red-600 text-sm font-bold uppercase px-4 py-3 text-white rounded-lg"
          onClick={() => handleModalEliminarTarea(tarea)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tarea;
