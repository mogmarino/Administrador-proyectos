import React from "react";
import { Link } from "react-router-dom";

const PreviewProyecto = ({ proyecto }) => {
  const { nombre, _id, cliente } = proyecto;
  return (
    <div className="border-b p-5 flex">
      <p className="flex-1">
        {nombre}
        <span className="text-sm uppercase text-gray-400"> {cliente}</span>
      </p>

      <Link
        to={`${_id}`}
        className=" text-gray-600 uppercase text-sm font-bold hover:text-gray-800"
      >
        ver proyecto
      </Link>
    </div>
  );
};

export default PreviewProyecto;
