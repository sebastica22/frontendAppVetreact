import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const NuevoPassword = () => {
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  const params = useParams()
  const [tokenValido, setTokenValido] = useState(false)
  const [passwordModificado, setPasswordModificado] = useState(false)
  const {token} = params;
  useEffect( () => {
      const comprobarToken = async () => {
        try {
          await clienteAxios(`/veterinarios/olvide-password/${token}`)
          setAlerta({
            msg: 'Coloca tu nuevo password'
          })
          setTokenValido(true)
          } catch (error) {
            setAlerta({
              msg: 'Hubo un error con el enlace',
              error: true
            })
          }
      }
      comprobarToken()
  }, [])

  const handleSubmit = async (e) => {
      e.preventDefault()
      if(password.length <6 ) {
        setAlerta({
          msg: 'El password debe ser minimo de 6 caracteres',
          error: true
        })
        return  
      }
      try {
          const url = `/veterinarios/Olvide-password/${token}`
          const { data } = await clienteAxios.post(url, { password })

          setAlerta({
            msg: data.msg
          })
          setPasswordModificado(true)
      } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
      }
  }

  const { msg } = alerta
  return (
    <>
        <div>
          <h1 className="text-emerald-600 font-black text-4xl">Appvet Reestablece tu  {" "}<span className="text-gray-700 " >Password</  span> 
          </h1>
        </div> 
        <div className='mt-15 md:mt-5 shadow-lg px-5 py-8 rounded-2xl'>

            {msg && <Alerta
              alerta={alerta}
            />}
            {tokenValido && (
                <>
                <form className="form1" onSubmit={handleSubmit}>
              
                <div className="my-5">
                      <label
                      className="uppercase text-gray-600 block text-xl font-bold"
                      >Nuevo password</label>
                      <input 
                      type="password" 
                      placeholder="Tu nuevo password"
                      className="border w-full p-3 mt-3 bg-gray-300 rounded-2xl"
                      value={password}
                      onChange={ e => setPassword(e.target.value)}
                      />
                    </div> 
                    <input 
                    type="submit"
                    value="Enviar &#x2728;"
                    className="bg-emerald-600 w-full rounded-2xl text-xl font-bold text-gray-900 py-1.5 uppercase mt-5      hover:bg-emerald-400 hover:cursor-pointer" 
                    />
                </form>
                 
                </>
            )}

            {passwordModificado && 
              <Link 
               className='block text-center my-5 text-emerald-700 hover:text-emerald-300 font-thin'
               to="/">Inicia sesion aqui &#x2728;
              </Link>
              
            }
          
        </div>
    </>
  )
}

export default NuevoPassword;