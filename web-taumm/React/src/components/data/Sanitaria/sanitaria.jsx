import React from "react";
import sanitaria from "./sanitaria";
import "../catalogos.css";

export  function CatalogoSanitaria() {
  return (
    <div>
      <div className="catalogo-grid">
        {sanitaria.map((item) => (
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

export  function CatalogoSanitariaPrecio() {
  return (
    <div>
      <div className="catalogo-grid">
        {sanitaria.map((item) => (
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
