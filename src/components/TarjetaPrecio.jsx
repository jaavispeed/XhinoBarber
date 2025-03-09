import "../css/TarjetaPrecio.css";

export const TarjetaPrecio = () => {
  return (
    <div className="centrado">
      <div className="tarjeta-precio">
        <div className="tarjeta-header">
          <h3>Corte de pelo</h3>
          <div className="precio">$5.000</div>
        </div>
        <div className="tarjeta-body">
          <ul>
            <li className="lista-item">✅ Degradado</li>
            <li className="lista-item">✅ Perfilado de Cejas</li>
            <li className="lista-item">✅ Bebida de cortesía</li>
          </ul>
          <button className="btn-agendar">Agendar</button>
        </div>
      </div>
    </div>
  );
};