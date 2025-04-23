import React from "react";
import ProductoComponente from "../components/ProductoComponente";
import FacturaComponente from "../components/FacturaComponente";
import TipoDePagoComponente from "../components/TipoDePagoComponente";

const PantallaPrincipal = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 grid gap-6">
      <h1 className="text-2xl font-bold text-center mb-6">Sistema de Facturación</h1>
      
      <FacturaComponente />
      <ProductoComponente />
      <TipoDePagoComponente />
    </div>
  );
};

export default PantallaPrincipal;
