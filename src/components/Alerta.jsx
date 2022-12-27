

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-emerald-400 to-emerald-600'} bg-gradient-to-r text-center py-3 rounded-2xl uppercase text-white font-bold text-sm mb-10`}>
        {alerta.msg}

    </div>
  )
}

export default Alerta