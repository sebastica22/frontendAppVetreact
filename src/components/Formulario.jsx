import { useState, useEffect } from 'react';
import Alerta from './Alerta' 
import usePacientes from '../hooks/UsePacientes'


const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const { guardarPaciente, paciente } = usePacientes()

    useEffect( () => {
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)

        }
    }, [paciente])

    

    const handleSubmit = e  => {
        e.preventDefault()
        //validar formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }
        
        guardarPaciente({nombre, propietario, email, fecha, sintomas, id})
        setAlerta({
            msg: 'Guardado correctamente'
        })
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')
    }
    
    const {msg} = alerta

  return (
    <>
        <h2 className='font-black text-3xl text-center m-10'>
          Administrador de pacientes
        </h2>
        <p className="text-lg text-center mb-10">

            Añade tus pacientes y {''} <span className="text-emerald-400 font-bold">Administralos</span>

        </p>

        {msg && <Alerta alerta={alerta}/>}
        
        <form
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
        onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label htmlFor="mascota"
                className="text-emerald-600 uppercase font-bold"
                >Nombre mascota</label>
                <input 
                type="text" 
                id="nombre"
                placeholder="Nombre mascota"
                className="border-4 w-full p-2 mt-2 placeholder-emerald-400 rounded-md"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />

            </div>
            <div className="mb-5">
                <label htmlFor="propietario"
                className="text-emerald-600 uppercase font-bold"
                >Nombre propietario</label>
                <input 
                type="text" 
                id="propietario"
                placeholder="Nombre propietario"
                className="border-4 w-full p-2 mt-2 placeholder-emerald-400 rounded-md"
                value={propietario}
                onChange={e => setPropietario(e.target.value)}
                />

            </div>
            <div className="mb-5">
                <label htmlFor="email"
                className="text-emerald-600 uppercase font-bold"
                >Email</label>
                <input 
                type="email" 
                id="email"
                placeholder="Email"
                className="border-4 w-full p-2 mt-2 placeholder-emerald-400 rounded-md"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

            </div>
            <div className="mb-5">
                <label htmlFor="fecha"
                className="text-emerald-600 uppercase font-bold"
                >Fecha salida</label>
                <input 
                type="date" 
                id="Fecha"
                placeholder="Fecha"
                className="border-4 w-full p-2 mt-2 placeholder-emerald-400 rounded-md"
                value={fecha}
                onChange={e => setFecha(e.target.value)}
                />

            </div>
            <div className="mb-5">
                <label htmlFor="sintomas"
                className="text-emerald-600 uppercase font-bold"
                >Sintomas</label>
                <textarea 
                id="Sintomas"
                placeholder="Sintomas"
                className="border-4 w-full p-2 mt-2 placeholder-emerald-400 rounded-md"
                value={sintomas}
                onChange={e => setSintomas(e.target.value)}
                />

            </div>
            <input
            type="submit"
            className="bg-emerald-400 w-full rounded-xl py-2 text-white font-bold uppercase cursor-pointer hover:bg-emerald-800 transition-colors"
            value={id ? 'Guardar cambios' : 'Agregar paciente'}
            />
        </form>
    </>
  )
}

export default Formulario