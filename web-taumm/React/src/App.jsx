import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import Navbar from './components/navbar/Navbar.jsx';
import FinalBar from './components/finalbar/finalbar.jsx';
import './App.css';


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
        <FinalBar />
      </>
    ),
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
