import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Alerta from '../components/Alerta'
import { useState } from 'react';
import clienteAxios from '../config/axios';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta ] = useState({})
  const { setAuth } = useAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
      e.preventDefault();
      if([email, password].includes('')) {
        setAlerta({
          msg: 'Todos los campos son obligatorios',
          error: true
        });
        return
      }
      try {
        const {data} = await clienteAxios.post('/veterinarios/login', {email, password})
        localStorage.setItem('token', data.token)
        setAuth(data);
        navigate('/admin')
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
  }



  const { auth } = useAuth()

  const { msg } = alerta

  return (
    <>

      
      <div>
        <h1 className="text-emerald-600 font-black text-4xl">Inicia sesion y Administra tus {" "} <span className="text-gray-700 " >Pacientes</span> 
        </h1>
      </div>
      <div className='mt-15 md:mt-5 shadow-lg px-5 py-8 rounded-2xl'>
            {msg && <Alerta
              alerta={alerta}
            />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label
            className="uppercase text-gray-600 block text-xl font-bold"
            >Email</label>
            <input 
            type="email" 
            placeholder="Email de registro"
            className="border w-full p-3 mt-3 bg-gray-300 rounded-2xl"
            value={email}
            onChange= {e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
            className="uppercase text-gray-600 block text-xl font-bold mt-7"
            >Password</label>
            <input 
            type="password" 
            placeholder="Password"
            className="border w-full p-3 mt-3 bg-gray-300 rounded-2xl"
            value={password}
            onChange= {e => setPassword(e.target.value)}
            />
          </div>
          <input 
          type="submit"
          value="Iniciar sesion"
          className="bg-emerald-600 w-full rounded-2xl text-xl font-bold text-gray-900 py-1.5 uppercase mt-5 hover:bg-emerald-400 hover:cursor-pointer" 
          />
        </form>
        <nav className='mt-7 lg:flex lg:justify-between gap-20'>
          <Link 
            className='block text-center my-5 text-emerald-700 hover:text-emerald-300'
            to="/registrar">No tienes una cuenta? Crea una aqui &#x2728;
          </Link>
          <Link 
            className='block text-center my-5 text-emerald-700 hover:text-emerald-300'
            to="/Olvide-password">Olvide mi password &#x1f62d;
           
          </Link>
        </nav>
      </div>
      
    </>
  );
};

export default Login;