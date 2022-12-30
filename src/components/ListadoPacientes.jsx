import usePacientes from '../hooks/UsePacientes'
import Paciente from './Paciente'

const ListadoPacientes = () => {

  const { pacientes } = usePacientes()

  
  return (
    <>
      {pacientes.length ? 
      (
        <>
          <h2 className='font-black text-3xl text-center m-10'>
            Tus pacientes
          </h2>
          <p className='text-center mt-5'>
            Administra tus {''} <span className='text-emerald-400 font-bold'>Pacientes</span>
          </p>
          {pacientes.map( paciente => (
            <Paciente
              key={paciente._id}
              paciente={paciente}
            />
          ))}
        </>
      ) : 
      (
        <>
          <h2 className='font-black text-3xl text-center m-10'>
            No hay pacientes
          </h2>
          <p className='text-center mt-5'>
            Agrega tus pacientes {''} <span className='text-emerald-600 font-bold'>Apareceran aqui</span>
          </p>
        
        </>

      )}
    </>
  )
}

export default ListadoPacientes