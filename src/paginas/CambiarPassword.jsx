import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import { useState } from "react"
import useAuth from "../hooks/useAuth"

const CambiarPassword = () => {

  const { guardarPassword } = useAuth()
  const [alerta, setAlerta] = useState({})
  const [password, setPassword] = useState({
    pwd_actual: '',
    pwd_nuevo: ''
  })
  const handleSubmit = async e => {
    e.preventDefault()
    if(Object.values(password).some( campo => campo === '')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    if(password.pwd_nuevo.length < 6 ) {
      setAlerta({
        msg: 'Minimo 6 caracteres',
        error: true
      })
      return
   
  }

   const respuesta = await guardarPassword(password)
   setAlerta(respuesta)
  }
  const { msg } = alerta
  return (
    <>
        <AdminNav/>
        <h2 className="font-black text-3xl text-center mt-10">Cambiar password</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} <span className="text-emerald-700 font-bold">Password aqui</span> </p>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-gray-300 shadow-md rounded-2xl p-5">

                {msg && <Alerta alerta={alerta}/>}

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="mt-5">
                        <label className=" uppercase font-bold text-emerald-700"
                        >Password actual</label>
                        <input 
                            type="password"
                            className="border bg-gray-100 w-full py-2 mt-5 rounded-2xl"
                            name="pwd_actual"
                            placeholder="Password actual"
                            onChange={e => setPassword({
                              ...password,
                              [e.target.name] : e.target.value
                            })}
                           
                        />
                    </div>
                    <div className="mt-5">
                        <label className="  uppercase font-bold text-emerald-700"
                        >Nuevo password</label>
                        <input 
                            type="password"
                            className="border bg-gray-100 w-full py-2 mt-5 rounded-2xl"
                            name="pwd_nuevo"
                            placeholder="Nuevo password"
                            onChange={e => setPassword({
                              ...password,
                              [e.target.name] : e.target.value
                            })}
                           
                        />
                    </div>
                  
                    <input 
                        type="submit"
                        value="Actualizar password"
                        className="bg-emerald-600 w-full rounded-2xl text-xl font-bold text-white py-1.5 uppercase mt-5    hover:bg-emerald-400 hover:cursor-pointer" 
                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default CambiarPassword