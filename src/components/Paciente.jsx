import usePacientes from "../hooks/UsePacientes"

const Paciente = ({paciente}) => {

    const { setEdicion, eliminarPaciente } = usePacientes()

    const { email, fecha, nombre, propietario, sintomas, _id } = paciente
    
    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat("es", {
            day: "2-digit",
            year: "2-digit",
            month: "2-digit"
          }).format(nuevaFecha)
    }
    
  return (
    <div  className="mx-5 my-10 bg-gray-200  shadow-md px-5 py-10 rounded-2xl ">
        <p className="font-bold uppercase text-emerald-600 my-2">Nombre: {'  '} 
            <span className="font-normal normal-case text-black">{nombre}</span>
        </p>
        <p className="font-bold uppercase text-emerald-600 my-2">Email: {'  '} 
            <span className="font-normal normal-case text-black">{email}</span>
        </p>
        <p className="font-bold uppercase text-emerald-600 my-2">Propietario: {'  '} 
            <span className="font-normal normal-case text-black">{propietario}</span>
        </p>
        <p className="font-bold uppercase text-emerald-600 my-2">Fecha: {'  '} 
            <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
        </p>
        <p className="font-bold uppercase text-emerald-600 my-2">Sintomas: {'  '} 
            <span className="font-normal normal-case text-black">{sintomas}</span>
        </p>
        <div className="flex justify-between my-5 mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-emerald-400 hover:bg-emerald-700 text-white font-bold uppercase rounded-3xl"
                onClick={() => setEdicion(paciente)}
            >Editar</button>
            <button
                type="button"
                className="py-2 px-10 bg-red-400 hover:bg-red-700 text-white font-bold uppercase rounded-3xl"
                onClick={() => eliminarPaciente(_id)}
            >Eliminar</button>

        </div>
    </div>
  )
}

export default Paciente