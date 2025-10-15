import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import Navbar from './components/navbar/Navbar.jsx';
import FinalBar from './components/finalbar/finalbar.jsx';
import './App.css';
import Construction from './components/pages/Construction/construction.jsx';
import CatalogoMonomandos from './components/data/Monomandos/monomandos.jsx';

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
    path: '/login',
    element: (
      <>
        <Navbar />
        <FinalBar />
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
