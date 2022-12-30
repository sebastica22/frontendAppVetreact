import { Link } from "react-router-dom"

const AdminNav = () => {
  return (
    <nav className="flex gap-10">
        <Link
            to='/admin/perfil'
            className="font-bold uppercase text-gray-400 hover:text-emerald-600"
        >Perfil</Link>
        <Link
            to='/admin/cambiar-password'
            className="font-bold uppercase text-gray-400 hover:text-emerald-600" 
        >Cambiar password</Link>
    </nav>
  )
}

export default AdminNav