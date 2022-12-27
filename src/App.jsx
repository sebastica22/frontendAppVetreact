import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import  Login  from "./paginas/Login"
import  ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import  OlvidePassword from "./paginas/OlvidePassword"
import  Registrar  from "./paginas/Registrar"
import NuevoPassword from "./paginas/NuevoPassword"
import { AuthProvider } from "./context/AuthProvider"

function App() {
    

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="Registrar" element={<Registrar />} />
            <Route path="Olvide-password" element={<OlvidePassword />} />
            <Route path="Olvide-password/:token" element={<NuevoPassword />} />
            <Route path="Confirmar-cuentas/:id" element={<ConfirmarCuenta />} />
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
