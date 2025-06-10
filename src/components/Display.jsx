const Display = ({ partido }) => {
  return (
    <div className="display">    
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Local</th>
            <th>Visitante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">⚽</th>
            <td>{partido.golesLocal}</td>
            <td>{partido.golesVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟨</th>
            <td>{partido.faltalocal}</td>
            <td>{partido.faltavisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟥</th>
            <td>{partido.sacadolocal}</td>
            <td>{partido.sacadovisitante}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default Display