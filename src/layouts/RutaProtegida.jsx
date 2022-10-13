import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  console.log(auth);

  //   aqui se le puede colocar un spinner de carga
  if (cargando) return "Cargando...";

  return <>{auth._id ? <Outlet /> : <Navigate to="/" />}</>;
};

export default RutaProtegida;
