import React from "react";
import valvulas from "./valvulas";
import "../catalogos.css";

export default function CatalogoValvulas() {
  return (
    <div>
      <div className="catalogo-grid">
        {valvulas.map((item) => (
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

export default function CatalogoValvulasPrecio() {
  return (
    <div>
      <div className="catalogo-grid">
        {valvulas.map((item) => (
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
