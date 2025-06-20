const Controles = ({ onGol , falta , sacado , resetear}) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => { onGol('local') }}>⚽ Gol</button>
        <button onClick={() => { falta('local')}}>🟨 Amarilla</button>
        <button onClick={() => {sacado('local')}}>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGol('visitante') }}>⚽ Gol</button>
        <button onClick={() => { falta('visitante')}}>🟨 Amarilla</button>
        <button onClick={() => {sacado('visitante')}}>🟥 Roja</button>
      </div>
      <button onClick={resetear}>reiniciar</button>
    </div>
  )
}

export default Controles