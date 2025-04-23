import React, { useState } from "react";
import "./ProductoComponente.css";

const ProductoComponente = () => {
  const [productos, setProductos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const agregarProducto = () => {
    if (input.trim()) {
      setProductos([...productos, input.trim()]);
      setInput("");
    }
  };

  return (
    <div className="producto-container">
      <h2 className="text-xl font-semibold mb-2">Productos</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="producto-input"
        placeholder="Nombre del producto"
      />
      <button onClick={agregarProducto} className="producto-boton">
        Agregar
      </button>
      <ul className="producto-lista list-disc">
        {productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoComponente;
