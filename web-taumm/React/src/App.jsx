import { PureComponent, useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Navigate } from 'react-router';


import Navbar from './components/navbar/Navbar.jsx';
import FinalBar from './components/finalbar/finalbar.jsx';
import './App.css';
import Construction from './components/pages/Construction/construction.jsx';
import SignInBox from './components/pages/login/signin.jsx';
import SignUpBox from './components/pages/login/signup.jsx';
import LandPage from './components/pages/landpage/landpage.jsx';
import Contacto from './components/pages/Contact/contacto.jsx';
import Profile from './components/pages/profile/Profile.jsx'

import CatalogoMonomandos from './components/data/Monomandos/monomandos.jsx';
import CatalogoAccDucha from './components/data/Acc Ducha/accducja.jsx';
import CatalogoAccBano from './components/data/Acc Baño/accbaño.jsx';
import CatalogoGriferiaGeneral from './components/data/Griferia General/griferia-general.jsx';
import CatalogoFlexibles from './components/data/Flexibles/flexibles.jsx';
import CatalogoValvulas from './components/data/Valvulas/valvulas.jsx';
import CatalogoLLaves from './components/data/Llaves/llaves.jsx';
import CatalogoFitingBonce from './components/data/Fiting Bonce/fitingbonce.jsx';
import CatalogoTemporizadas from './components/data/Temporizadas/temporizadas.jsx';
import CatalogoFittingLaton from './components/data/Fitting Laton/fittinglaton.jsx';
import CatalogoSanitaria from './components/data/Sanitaria/sanitaria.jsx';
import CatalogoRepuestos from './components/data/Repuestos/repuestos.jsx';
import CatalogoShowerDoor from './components/data/Shower Door/showerdoor.jsx';
import CatalogoEspejoVanit from './components/data/Espejo Vanit/espejovanit.jsx';


const PrivateRoute = ({ children}) => {
  const isAuthenticated = !!localStorage.getItem('token')
  return isAuthenticated ? children: <Navigate to = '/signin' />
};



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <LandPage />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/signin',
    element: (
      <>
        <Navbar />
        <SignInBox />
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <Navbar />
        <SignUpBox />
      </>
    ),
  },
  {
    path: '/productos',
    element: (
      <PrivateRoute>
        <Navbar />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/contacto',
    element: (
      <>
        <Navbar />
        <Contacto />
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
        <CatalogoTemporizadas />
        <CatalogoFittingLaton />
        <CatalogoSanitaria />
        <CatalogoRepuestos />
        <CatalogoShowerDoor />
        <CatalogoEspejoVanit />
        <FinalBar />
      </>
    ),
  },

  {
    path: '/profile',
    element: (
      <PrivateRoute>
        <Navbar>
        <Profile />
        </Navbar>
      </PrivateRoute>
    )
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

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
