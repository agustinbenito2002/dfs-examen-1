import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0,
    faltalocal: 0,
    faltavisitante: 0,
    sacadolocal: 0,
    sacadovisitante: 0
  })

  const onGol = (equipo) => {
    if(equipo =='local'){
    setPartido({ ...partido, golesLocal: partido.golesLocal + 1 })
    }
    else{
      setPartido({ ...partido, golesVisitante: partido.golesVisitante + 1 })
    }
  }

const falta = (equipo) => {
    if(equipo =='local'){
    setPartido({ ...partido, faltalocal: partido.faltalocal + 1 })
    }
    else{
      setPartido({ ...partido, faltavisitante: partido.faltavisitante + 1 })
    }
  }


  const sacado = (equipo) => {
    if(equipo =='local'){
    setPartido({ ...partido, sacadolocal: partido.sacadolocal + 1 })
    }
    else{
      setPartido({ ...partido, sacadovisitante: partido.sacadovisitante + 1 })
    }
  }

  const resetear = () =>{
    setPartido({ ...partido, golesLocal: partido.golesLocal = 0 })
setPartido({ ...partido, golesVisitante: partido.golesVisitante = 0 })
setPartido({ ...partido, faltalocal: partido.faltalocal = 0 })
setPartido({ ...partido, faltavisitante: partido.faltavisitante = 0 })
setPartido({ ...partido, sacadolocal: partido.sacadolocal = 0 })
   setPartido({ ...partido, sacadovisitante: partido.sacadovisitante = 0 })
  }

  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGol={onGol} falta={falta} sacado={sacado} resetear={resetear}/>
      <Display partido={partido} />
    </div>
  )
}

export default App
