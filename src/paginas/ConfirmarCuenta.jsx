import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const ConfirmarCuenta = () => {

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({})
  
  const params = useParams()
  const { id } = params
   
  
  useEffect(() =>{
      const confirmarCuenta = async () => {
        try {
            const url = `/veterinarios/confirmar/${id}`
            const { data } = await clienteAxios(url)
            setCuentaConfirmada(true)
            setAlerta({
              msg: data.msg
            })
        } catch (error) {
            setAlerta({
              msg: error.response.data.msg,
              error: true
            })
        }

        setCargando(false)
      } 
      confirmarCuenta(false);
  }, [])

  return (
      <>
        <div>
          <h1 className="text-emerald-600 font-black text-4xl">Confirma tu cuenta y Administra tus {" "}<span   className="text-gray-700 " >Pacientes</span> 
          </h1>
        </div> 
        <div className='mt-15 md:mt-5 shadow-lg px-5 py-8 rounded-2xl'>
           {!cargando && 
            <Alerta
              alerta={alerta}
            />}
            {cuentaConfirmada && (
              <Link 
                type='submit'
                className='block  text-center my-10 py-2 text-black uppercase font-bold border rounded-2xl bg-emerald-500'
                to="/"> Inicia sesion aqui &#x2728;
              </Link>
              
            )}
        </div>
      </>
  )
};

export default ConfirmarCuenta