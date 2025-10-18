import React from "react";
import { useNavigate } from "react-router";
import "./construction.css";
import Logo from '../../../assets/logo-taumm-simple.png';
import constructionImage from '../../../assets/under-construction.png';

export default function Construction() {
    const navigate = useNavigate();

    return (
        <div className="construction-container">

            <img 
            src = {constructionImage}
            alt = "En construcción"
            className="construction-image"
            />

            <h2> ¡Estamos trabajando en ello! </h2>
            <p> Pronto esta sección estará disponible.</p>
        </div>
    );
}