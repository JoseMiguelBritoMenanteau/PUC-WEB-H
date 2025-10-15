import React from "react";
import espejoVanit from "./espejovanit";
import "../catalogos.css";

export default function CatalogoEspejoVanit() {
  return (
    <div>
      <div className="catalogo-grid">
        {espejoVanit.map((item) => (
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
