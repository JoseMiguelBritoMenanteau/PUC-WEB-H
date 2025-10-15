import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import Navbar from './components/navbar/Navbar.jsx';
import FinalBar from './components/finalbar/finalbar.jsx';
import './App.css';
import Construction from './components/pages/Construction/construction.jsx';
import SignInBox from './components/pages/login/login.jsx';

import CatalogoMonomandos from './components/data/Monomandos/monomandos.jsx';
import CatalogoAccDucha from './components/data/Acc Ducha/accducja.jsx';
import CatalogoAccBano from './components/data/Acc Baño/accbaño.jsx';
import CatalogoGriferiaGeneral from './components/data/Griferia General/griferia-general.jsx';
import CatalogoFlexibles from './components/data/Flexibles/flexibles.jsx';
import CatalogoValvulas from './components/data/Valvulas/valvulas.jsx';
import CatalogoLLaves from './components/data/Llaves/llaves.jsx';
import CatalogoFitingBonce from './components/data/Fiting Bonce/fitingbonce.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/iniciarsesion',
    element: (
      <>
        <Navbar />
        <SignInBox />
      </>
    ),
  },
  {
    path: '/productos',
    element: (
      <>
        <Navbar />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/contacto',
    element: (
      <>
        <Navbar />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo',
    element: (
      <>
        <Navbar />
        <CatalogoMonomandos />
        <CatalogoAccDucha />
        <CatalogoAccBano />
        <CatalogoGriferiaGeneral />
        <CatalogoFlexibles />
        <CatalogoValvulas />
        <CatalogoLLaves />
        <CatalogoFitingBonce />
        <FinalBar />
      </>
    ),
  },
  {
    path: '*',
    element: (
      <>
        <Construction />
        <FinalBar />
      </>
    )
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
