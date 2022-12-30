import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"


const OlvidePassword = () => {
  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})
  const handleSubmit = async (e) => {
      e.preventDefault()
      if(email === '' || email.length < 6){
        setAlerta({ msg: 'El email es obligatorio', error: true})
        return
      }
      try {
        const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email })
        console.log(data);
        setAlerta({msg: data.msg})
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
        <h1 className="text-emerald-600 font-black text-4xl">Recupera el acceso, no pierdas tus {" "}<span className="text-gray-700 " >Pacientes</span> 
        </h1>
      </div> 
      <div>
          <div className='mt-15 md:mt-5 shadow-lg px-5 py-8 rounded-2xl'>

            {msg && <Alerta 
              alerta={alerta} 
            />}

            <form
            onSubmit={handleSubmit}
            >
          
              <label
              className="uppercase text-gray-600 block text-xl font-bold"
              >Email</label>
              <input 
              type="email" 
              placeholder="Email de registro"
              className="border w-full p-3 mt-3 bg-gray-300 rounded-2xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <input 
              type="submit"
              value="Enviar"
              className="bg-emerald-600 w-full rounded-2xl text-xl font-bold text-gray-900 py-1.5 uppercase mt-5    hover:bg-emerald-400 hover:cursor-pointer" 
              />
            </form>
          </div>
          <nav className='mt-7 lg:flex lg:justify-between gap-20'>
          <Link 
            className='block text-center my-5 text-emerald-700 hover:text-emerald-300 font-thin'
            to="/">Ya tienes una cuenta? Inicia sesion aqui &#x2728;
          </Link>
          <Link 
            className='block text-center my-5 text-emerald-700 hover:text-emerald-300 font-thin'
            to="/registrar">Ya tienes una cuenta? Registrate aqui &#x2728;
          </Link>
        </nav>
      </div>
    </>
  )
}

export default OlvidePassword