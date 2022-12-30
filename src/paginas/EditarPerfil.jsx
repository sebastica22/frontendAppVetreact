import AdminNav from "../components/AdminNav"
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from "react"
import Alerta from '../components/Alerta'

const EditarPerfil = () => {

    const { auth, actualizarPerfil } = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})
    useEffect( () => {
        setPerfil(auth)
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()

        const { nombre, email } = perfil 

        if([nombre, email].includes('')){
            setAlerta({
                msg: 'Nombre y Email son obligatorios',
                error: true
            })
            return
        }

        const resultado = await actualizarPerfil(perfil)
        setAlerta(resultado)
    }

    const { msg } = alerta

  return (
    <>
        <AdminNav/>
        <h2 className="font-black text-3xl text-center mt-10">Editar perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} <span className="text-emerald-700 font-bold">Informacion</span> </p>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-gray-300 shadow-md rounded-2xl p-5">

                {msg && <Alerta alerta={alerta}/>}

                <form
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className=" uppercase font-bold text-emerald-700"
                        >Nombre</label>
                        <input 
                            type="text"
                            className="border bg-gray-100 w-full py-2 mt-5 rounded-2xl"
                            name="nombre"
                            value={perfil.nombre || ''}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    <div className="mt-3">
                        <label className=" uppercase font-bold text-emerald-700"
                        >Sitio web</label>
                        <input 
                            type="text"
                            className="border bg-gray-100 w-full py-2 mt-5 rounded-2xl"
                            name="web"
                            value={perfil.web || ''}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    <div className="mt-3">
                        <label className=" uppercase font-bold text-emerald-700"
                        >Telefono</label>
                        <input 
                            type="phone"
                            className="border bg-gray-100 w-full py-2 mt-5 rounded-2xl"
                            name="telefono"
                            value={perfil.telefono || ''}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    <div className="mt-3">
                        <label className=" uppercase font-bold text-emerald-700"
                        >Email</label>
                        <input 
                            type="email"
                            className="border bg-gray-100 w-full py-2 mt-5 rounded-2xl"
                            name="email"
                            value={perfil.email || ''}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    <input 
                        type="submit"
                        value="Guardar cambios"
                        className="bg-emerald-600 w-full rounded-2xl text-xl font-bold text-white py-1.5 uppercase mt-5    hover:bg-emerald-400 hover:cursor-pointer" 
                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default EditarPerfil