import React from "react";
import monomandos from "./monomandos";
import "../catalogos.css";

export default function CatalogoMonomandos() {
    return (
        <div>
        
            <div className="catalogo-grid">
                {monomandos.map((item) => (
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