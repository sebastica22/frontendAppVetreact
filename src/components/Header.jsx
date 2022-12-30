import { Link } from "react-router-dom"
import useAuth from '../hooks/useAuth'

const Header = () => {

  const { cerrarSesion } = useAuth()
  return (
    <header className="py-10 bg-emerald-300">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-center text-emerald-100">Administrador de pacientes {''} <span className="text-white font-black">Appvet</span></h1>

        
            <nav className="flex flex-col items-center lg:flex-row mt-5 lg:mt-0 gap-6 ">
                <Link to="/admin" className="text-white text-sm uppercase font-bold hover:text-black hover:underline">Pacientes</Link>
                <Link to="/admin/perfil" className="text-white text-sm uppercase font-bold hover:text-black hover:underline">Perfil</Link>

                <button
                    type="button"
                    className="text-white text-sm uppercase font-bold hover:text-black hover:underline"
                    onClick={cerrarSesion}
                >Cerrar sesion</button>

            </nav>
        </div>

    </header>
  )
}

export default Header