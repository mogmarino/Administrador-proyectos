import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import Login from "./paginas/Login";
import OlvidePass from "./paginas/OlvidePass";
import NuevoPass from "./paginas/NuevoPass";
import Registrar from "./paginas/Registrar";
import Proyectos from "./paginas/Proyectos";
import NuevoProyecto from "./paginas/NuevoProyecto";
import { AuthProvider } from "./context/AuthProvider";
import { ProyectosProvider } from "./context/ProyectosProvider";

console.log(import.meta.env.VITE_BACKEND_URL);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-pass" element={<OlvidePass />} />
              <Route path="olvide-pass/:token" element={<NuevoPass />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>
            <Route path="/proyectos" element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path="crear-proyecto" element={<NuevoProyecto />} />
            </Route>
          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
