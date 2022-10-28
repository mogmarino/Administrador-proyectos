import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b px-4 py-5">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-center mb-5 font-black md:mb-0 text-sky-600">
          UpTask
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button type="button" className="font-bold uppercase">
            Buscar Proyectos
          </button>
          <Link to="/proyectos" className="font-bold uppercase">
            Proyectos
          </Link>
          <button
            type="button"
            className="uppercase bg-sky-600 text-white p-3 rounded-md font-bold text-sm hover:bg-sky-700 transition-colors"
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
