import React from 'react';
import { useState, useRef, useEffect, useMemo } from 'react';
import './landpage.css'
import catalogoCompleto from '../../data/catalogoCompleto';

function obtenerProductos(arr, num) {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia.slice(0, num);
}

const LandPage = () => {
    const productosRecomendados = useMemo(() => obtenerProductos(catalogoCompleto, 10), []);
    const [pos, setPos] = useState(0);
    const mostrar = 5;

    const productosVisibles = Array.from({ length: mostrar }, (_, i) => productosRecomendados[(pos + i) % productosRecomendados.length]);
    const handleLeft = () => setPos(p => (p - 1 + productosRecomendados.length) % productosRecomendados.length);
    const handleRight = () => setPos(p => (p + 1) % productosRecomendados.length);

    return (
        <div className='landpage-container'>
            <h1 className='landpage-title'> Productos recomendados</h1>
            <div className= "carrusel-rodillo">
                <button className='carrusel-flecha izquierda' onClick={handleLeft} > &lt; </button>
                <div className='carrusel-inner'>
                    {productosVisibles.map((producto, indice) => (
                        <div className='producto-card' key = {indice}>
                            <img src={producto.foto} alt={producto.descripcion} className='producto-img' />
                            <div className= "producto-info">
                                <h2> {producto.codigo} </h2>
                                <p> {producto.descripcion} </p>
                            </div>

                        </div>
                    ))}
                </div>
                <button className='carrusel-flecha derecha' onClick={handleRight} > &gt; </button>
            </div>
        </div>
    )
}


export default LandPage;