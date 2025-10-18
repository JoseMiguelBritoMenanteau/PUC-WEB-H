import React from "react";
import fitingBonce from "./fitingbonce";
import "../catalogos.css";

export default function CatalogoFitingBonce() {
  return (
    <div>
      <div className="catalogo-grid">
        {fitingBonce.map((item) => (
          <div className="catalogo-card" key={item.codigo}>
            {item.foto && (
              <img src={item.foto} alt={item.descripcion} className="catalogo-img" />
            )}
            <div className="catalogo-codigo">{item.codigo}</div>
            <div className="catalogo-nombre">{item.descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CatalogoFitingBoncePrecio() {
  return (
    <div>
      <div className="catalogo-grid">
        {fitingBonce.map((item) => (
          <div className="catalogo-card" key={item.codigo}>
            {item.foto && (
              <img src={item.foto} alt={item.descripcion} className="catalogo-img" />
            )}
            <div className="catalogo-codigo">{item.codigo}</div>
            <div className="catalogo-nombre">{item.descripcion}</div>
            <div className="catalogo-precio">{item.precio}</div>
          </div>
        ))}
      </div>
    </div>
  );
}