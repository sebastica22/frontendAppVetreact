import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import  Login  from "./paginas/Login"
import  ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import  OlvidePassword from "./paginas/OlvidePassword"
import  Registrar  from "./paginas/Registrar"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="Registrar" element={<Registrar />} />
          <Route path="Olvide-password" element={<OlvidePassword />} />
          <Route path="Confirmar-cuentas" element={<ConfirmarCuenta />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
