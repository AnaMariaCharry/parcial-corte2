import React, { useState } from "react";
import "./FacturaComponente.css";

const FacturaComponente = () => {
  const [datos, setDatos] = useState({
    cliente: "",
    fecha: "",
    tipoFactura: "",
  });

  return (
    <div className="factura-container">
      <h2 className="text-xl font-semibold mb-2">Encabezado de la Factura</h2>
      <input
        type="text"
        placeholder="Nombre del cliente"
        className="factura-input"
        value={datos.cliente}
        onChange={(e) => setDatos({ ...datos, cliente: e.target.value })}
      />
      <input
        type="date"
        className="factura-input"
        value={datos.fecha}
        onChange={(e) => setDatos({ ...datos, fecha: e.target.value })}
      />
      <select
        className="factura-select"
        value={datos.tipoFactura}
        onChange={(e) => setDatos({ ...datos, tipoFactura: e.target.value })}
      >
        <option value="">Seleccione tipo de factura</option>
        <option value="contado">Contado</option>
        <option value="crédito">Crédito</option>
      </select>
      <div className="factura-datos">
        <p><strong>Cliente:</strong> {datos.cliente}</p>
        <p><strong>Fecha:</strong> {datos.fecha}</p>
        <p><strong>Tipo de Factura:</strong> {datos.tipoFactura}</p>
      </div>
    </div>
  );
};

export default FacturaComponente;
