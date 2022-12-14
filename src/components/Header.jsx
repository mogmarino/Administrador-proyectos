import React from "react";
import { Link } from "react-router-dom";
import { useProyectos } from "../hooks/useProyectos";
import { useAuth } from "../hooks/useAuth";
import Busqueda from "./Busqueda";

const Header = () => {
  const { handleBuscador, cerrarSesionProyectos } = useProyectos();
  const { cerrarSesionAuth } = useAuth();

  const handleCerrarSesion = () => {
    cerrarSesionProyectos();
    cerrarSesionAuth();
    localStorage.removeItem("token");
  };
  return (
    <header className="bg-white border-b px-4 py-5">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-center mb-5 font-black md:mb-0 text-sky-600">
          UpTask
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            type="button"
            className="font-bold uppercase"
            onClick={handleBuscador}
          >
            Buscar Proyectos
          </button>
          <Link to="/proyectos" className="font-bold uppercase">
            Proyectos
          </Link>
          <button
            type="button"
            className="uppercase bg-sky-600 text-white p-3 rounded-md font-bold text-sm hover:bg-sky-700 transition-colors"
            onClick={handleCerrarSesion}
          >
            Cerrar Sesion
          </button>
          <Busqueda />
        </div>
      </div>
    </header>
  );
};

export default Header;
