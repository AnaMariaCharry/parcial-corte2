import React, { useState } from "react";
import "./TipoDeComponente.css";

const TipoDePagoComponente = () => {
  const [metodo, setMetodo] = useState("");

  return (
    <div className="pago-container">
      <h2 className="text-xl font-semibold mb-2">Método de Pago</h2>
      <select
        className="pago-select"
        value={metodo}
        onChange={(e) => setMetodo(e.target.value)}
      >
        <option value="">Seleccione una opción</option>
        <option value="efectivo">Efectivo</option>
        <option value="tarjeta">Tarjeta</option>
        <option value="transferencia">Transferencia</option>
      </select>
      {metodo && <p className="pago-mensaje">Método seleccionado: {metodo}</p>}
    </div>
  );
};

export default TipoDePagoComponente;
