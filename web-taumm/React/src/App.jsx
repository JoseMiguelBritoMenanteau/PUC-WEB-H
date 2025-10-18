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


import { CatalogoMonomandos } from './components/data/Monomandos/monomandos.jsx';
import { CatalogoAccDucha } from './components/data/Acc Ducha/accducja.jsx';
import {CatalogoAccBano }from './components/data/Acc Baño/accbaño.jsx';
import {CatalogoGriferiaGeneral} from './components/data/Griferia General/griferia-general.jsx';
import {CatalogoFlexibles} from './components/data/Flexibles/flexibles.jsx';
import {CatalogoValvulas} from './components/data/Valvulas/valvulas.jsx';
import { CatalogoLlaves } from './components/data/Llaves/llaves.jsx';
import {CatalogoFitingBonce} from './components/data/Fiting Bonce/fitingbonce.jsx';
import {CatalogoTemporizadas} from './components/data/Temporizadas/temporizadas.jsx';
import {CatalogoFittingLaton} from './components/data/Fitting Laton/fittinglaton.jsx';
import {CatalogoSanitaria} from './components/data/Sanitaria/sanitaria.jsx';
import {CatalogoRepuestos} from './components/data/Repuestos/repuestos.jsx';
import {CatalogoShowerDoor} from './components/data/Shower Door/showerdoor.jsx';
import {CatalogoEspejoVanit} from './components/data/Espejo Vanit/espejovanit.jsx';
import CategoriasBar from './components/categoriasbar/categoriasbar.jsx';

import {CatalogoFittingLatonPrecio} from './components/data/Fitting Laton/fittinglaton.jsx';
import {CatalogoMonomandosPrecio} from './components/data/Monomandos/monomandos.jsx';
import {CatalogoSanitariaPrecio} from './components/data/Sanitaria/sanitaria.jsx';
import {CatalogoRepuestosPrecio} from './components/data/Repuestos/repuestos.jsx';
import {CatalogoShowerDoorPrecio} from './components/data/Shower Door/showerdoor.jsx';
import {CatalogoEspejoVanitPrecio} from './components/data/Espejo Vanit/espejovanit.jsx';
import {CatalogoAccDuchaPrecio} from './components/data/Acc Ducha/accducja.jsx';
import {CatalogoAccBanoPrecio} from './components/data/Acc Baño/accbaño.jsx';
import {CatalogoGriferiaGeneralPrecio} from './components/data/Griferia General/griferia-general.jsx';
import {CatalogoFlexiblesPrecio} from './components/data/Flexibles/flexibles.jsx';
import {CatalogoValvulasPrecio} from './components/data/Valvulas/valvulas.jsx';
import { CatalogoLlavesPrecio } from './components/data/Llaves/llaves.jsx';
import {CatalogoFitingBoncePrecio} from './components/data/Fiting Bonce/fitingbonce.jsx';
import {CatalogoTemporizadasPrecio} from './components/data/Temporizadas/temporizadas.jsx';
import CategoriasBarProductos from './components/categoriasbar/categoriasbarProductos.jsx';


// import { ThemeProvider } from './context/Context.jsx';


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
        <CategoriasBarProductos />
        <CatalogoMonomandosPrecio />
        <CatalogoAccDuchaPrecio />
        <CatalogoAccBanoPrecio />
        <CatalogoGriferiaGeneralPrecio />
        <CatalogoFlexiblesPrecio />
        <CatalogoValvulasPrecio />
        <CatalogoLlavesPrecio />
        <CatalogoFitingBoncePrecio />
        <CatalogoTemporizadasPrecio />
        <CatalogoFittingLatonPrecio />
        <CatalogoSanitariaPrecio />
        <CatalogoRepuestosPrecio />
        <CatalogoShowerDoorPrecio />
        <CatalogoEspejoVanitPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },

  {
    path: '/productos/monomandos',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoMonomandosPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/accducha',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoAccDuchaPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/accbano',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoAccBanoPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/griferia-general',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoGriferiaGeneralPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/flexibles',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoFlexiblesPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/valvulas',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoValvulasPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/llaves',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoLlavesPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/fitingbonce',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoFitingBoncePrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/temporizadas',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoTemporizadasPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/fittinglaton',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoFittingLatonPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/sanitarios',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoSanitariaPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/repuestos',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoRepuestosPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/showerdoor',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoShowerDoorPrecio />
        <FinalBar />
      </PrivateRoute>
    ),
  },
  {
    path: '/productos/espejovanit',
    element: (
      <PrivateRoute>
        <Navbar />
        <CategoriasBarProductos />
        <CatalogoEspejoVanitPrecio />
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
        <CategoriasBar />
        <CatalogoMonomandos />
        <CatalogoAccDucha />
        <CatalogoAccBano />
        <CatalogoGriferiaGeneral />
        <CatalogoFlexibles />
        <CatalogoValvulas />
        <CatalogoLlaves />
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
    path: '/catalogo/monomandos',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoMonomandos />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/accducha',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoAccDucha />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/accbaño',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoAccBano />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/griferia-general',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoGriferiaGeneral />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/flexibles',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoFlexibles />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/valvulas',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoValvulas />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/llaves',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoLlaves />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/fitingbonce',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoFitingBonce />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/temporizadas',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoTemporizadas />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/fittinglaton',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoFittingLaton />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/sanitaria',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoSanitaria />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/repuestos',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoRepuestos />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/showerdoor',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoShowerDoor />
        <FinalBar />
      </>
    ),
  },
  {
    path: '/catalogo/espejovanit',
    element: (
      <>
        <Navbar />
        <CategoriasBar />
        <CatalogoEspejoVanit />
        <FinalBar />
      </>
    ),
  },

  


  {
    path: '/profile',
    element: (
      <PrivateRoute>
        <Navbar />
        <Profile />
      </PrivateRoute>
    )
  },

  {
    path: '*',
    element: (
      <>
        <Navbar />
        <Construction />
        <FinalBar />
      </>
    )
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
