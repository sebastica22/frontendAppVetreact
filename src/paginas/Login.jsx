import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>

      
      <div>
        <h1 className="text-emerald-600 font-black text-4xl">Inicia sesion y Administa tus <span className="text-gray-700 " >pacientes</span> 
        </h1>
      </div>
      <div>
        <form>
          <div className="my-5">
            <label
            className="uppercase text-gray-600 block text-xl font-bold"
            >Email</label>
            <input 
            type="email" 
            placeholder="Email de registro"
            className="border w-full p-3 mt-3 bg-gray-300 rounded-2xl"
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
            />
          </div>
          <input 
          type="submit"
          value="Iniciar sesion"
          className="bg-emerald-600 w-full rounded-2xl text-xl font-bold text-gray-900 py-1.5 uppercase mt-5 hover:bg-emerald-400 hover:cursor-pointer" 
          />
        </form>
        <nav className='mt-7 lg:flex lg:justify-between'>
          <Link 
            className='block text-center my-5 text-gray-400'
            to="/registrar">No tienes una cuenta? Crea una aqui &#x2728;
          </Link>
          <Link 
            className='block text-center my-5 text-gray-400'
            to="/Olvide-password">Olvide mi password &#x1f62d;
           
          </Link>
        </nav>
      </div>
      
    </>
  );
};

export default Login;