import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProyectos } from "../hooks/useProyectos";

const Proyecto = () => {
  const params = useParams();
  const { id } = params;
  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  useEffect(() => {
    return () => {
      obtenerProyecto(id);
    };
  }, []);

  console.log(proyecto);

  const { nombre } = proyecto;

  return cargando ? (
    "Cargando..."
  ) : (
    <div>
      <h1 className="font-black text-4xl">{nombre}</h1>
    </div>
  );
};

export default Proyecto;
