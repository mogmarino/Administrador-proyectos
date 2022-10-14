import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b px-4 py-5">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-center font-black text-sky-600">UpTask</h2>
        <input
          type="search"
          placeholder="Buscar Proyecto"
          className="rounded-lg lg:w-96 block p-2 border"
        />
        <div className="flex items-center gap-4">
          <Link to="/proyectos" className="font-bold uppercase">
            Proyectos
          </Link>
          <button
            type="button"
            className="uppercase bg-sky-600 text-white p-3 rounded-md font-bold text-sm"
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
