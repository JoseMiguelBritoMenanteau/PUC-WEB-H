import React from "react";
import griferiaGeneral from "./griferia-general";
import "../catalogos.css";

export  function CatalogoGriferiaGeneral() {
  return (
    <div>
      <div className="catalogo-grid">
        {griferiaGeneral.map((item) => (
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

export  function CatalogoGriferiaGeneralPrecio() {
  return (
    <div>
      <div className="catalogo-grid">
        {griferiaGeneral.map((item) => (
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