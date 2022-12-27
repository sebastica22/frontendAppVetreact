import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const Registrar = () => {
  const [ nombre, setNombre ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmaTuPassword, setConfirmaTuPassword ] = useState('')

  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
      e.preventDefault();

      if([nombre, email, password, confirmaTuPassword].includes('')){
        setAlerta({msg:'Hay campos vacios', error: true});
        return;
      }
      if(password !== confirmaTuPassword){
        setAlerta({msg:'Tus password no coinciden', error: true});
        return;
      }
      if(password.length < 6){
        setAlerta({msg:'Usa mas de 6 caracteres para tu password', error: true});
        return;
      }

      setAlerta({})
      try {
        
        await clienteAxios.post('/veterinarios', { nombre, email, password })
        setAlerta({
          msg:'Creado correctamente, revisa tu email',
          error: false
        })
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }


    }

    const {msg} = alerta


  return (
    <>
      <div>
        <h1 className="text-emerald-600 font-black text-4xl">Crea tu cuenta y Administra tus {" "}<span className="text-gray-700 " >Pacientes</span> 
        </h1>
      </div> 
      <div className='mt-15 md:mt-5 shadow-lg px-5 py-8 rounded-2xl'>
        {msg && <Alerta
          alerta={alerta}
        />}
        <form
          onSubmit={handleSubmit}
        >
          <div className="my-5">
              <label
              className="uppercase text-gray-600 block text-xl font-bold"
              >Nombre</label>
              <input 
              type="text" 
              placeholder="Tu nombre"
              className="border w-full p-3 mt-3 bg-gray-300 rounded-2xl"
              value={nombre}
              onChange={ e => setNombre(e.target.value)}
              />
          </div>
          <div className="my-5">
              <label
              className="uppercase text-gray-600 block text-xl font-bold"
              >Email</label>
              <input 
              type="email" 
              placeholder="Email de registro"
              className="border w-full p-3 mt-3 bg-gray-300 rounded-2xl"
              value={email}
              onChange={ e => setEmail(e.target.value)}
              />
          </div>
          <div className="my-5">
              <label
              className="uppercase text-gray-600 block text-xl font-bold"
              >Password</label>
              <input 
              type="password" 
              placeholder="Tu password"
              className="border w-full p-3 mt-3 bg-gray-300 rounded-2xl"
              value={password}
              onChange={ e => setPassword(e.target.value)}
              />
          </div>
          <div className="my-5">
              <label
              className="uppercase text-gray-600 block text-xl font-bold"
              >Confirma tu password</label>
              <input 
              type="password" 
              placeholder="Tu password de nuevo &#x1f44c;"
              className="border w-full p-3 mt-3 bg-gray-300 rounded-2xl"
              value={confirmaTuPassword}
              onChange={ e => setConfirmaTuPassword(e.target.value)}
              />
          </div>

              <input 
              type="submit"
              value="Crear cuenta"
              className="bg-emerald-600 w-full rounded-2xl text-xl font-bold text-gray-900 py-1.5 uppercase mt-5    hover:bg-emerald-400 hover:cursor-pointer" 
              />
            
        </form>
        <nav className='mt-7 lg:flex lg:justify-between gap-20'>
          <Link 
            className='block text-center my-5 text-gray-400 font-thin'
            to="/">Ya tienes una cuenta? Inicia sesion aqui &#x2728;
          </Link>
          <Link 
            className='block text-center my-5 text-gray-400'
            to="/Olvide-password">Olvide mi password &#x1f62d;
           
          </Link>
        </nav>
      </div>
    </>
  )
};

export default Registrar;