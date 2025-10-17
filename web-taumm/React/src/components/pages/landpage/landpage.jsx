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

    return (
        <div>
            <h1>Paradiso</h1>
            
        </div>
    )
}


export default LandPage;