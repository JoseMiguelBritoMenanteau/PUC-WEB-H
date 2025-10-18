import React from 'react';
import { useState, useRef, useEffect, useMemo } from 'react';
import './landpage.css'
import catalogoCompleto from '../../data/catalogoCompleto';
import industrial_ceo from '../../../assets/industrial_ceo.png';
import hq from '../../../assets/hq.png';

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
            <h1 className='landpage-title'> Nuestros Productos</h1>
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

            <h1 className='info-title' > Nuestra Misión </h1>
            <div className = 'info-container'>
                <p className = 'paragraph-container'> El mercado va cambiando, haciéndose cada vez más dinámico y exigente, y en Täumm nos hemos abocado a reaccionar sin cavilaciones a los nuevos desafíos, también acompañando a nuestros Clientes en sus puntos de venta con exhibiciones, las que a la vez de dar presencia a la marca, catalizan   la venta de los productos que se muestran.  Otra manera de potenciar la venta ha sido con gráficas explicativas de la funcionalidad y la variedad de ciertos productos, lo que resulta siempre beneficioso para que se entienda de mejor manera los usos que a éstos les caben.   Nuestra situación financiera es también del todo halagüeña, estando en un buen pie para hacer crecer nuestras instalaciones desde el actual predio de 9.000 m2 a uno que duplicará nuestra superficie disponible para nuestras labores logísticas, dando uso al nuevo terreno que ya adquirimos.</p>
                <p> Una necesaria perspectiva de nuestro país nos indica que lamentablemente en los últimos años el empleo y la actividad económica, en particular de nuestro sector de la construcción, se han visto muy anémicos, lo que hace difícil a proveedores y comercios mantener un rumbo claro y un comportamiento estable.  Lamentablemente ya se sabe de varias constructoras, tiendas y proveedores que han salido de escena, otros se mantienen, pero en grandes aprietos y bajo una delicada situación financiera.  Analizando la evolución de las ventas de varios actores de este sector, lo que predomina son los decrecimientos, a veces de dos dígitos incluso, respecto al período anterior; sin embargo, a consecuencia de las medidas que hemos tomado según se describe en los párrafos previos, Täumm viene avanzando este año con un crecimiento, modesto, pero positivo. </p>
                <img className = 'industrial-ceo-image' src = {industrial_ceo} />
                
            </div>
            <img className = 'hq-image' src = {hq} />
        </div>
    )
}


export default LandPage;



