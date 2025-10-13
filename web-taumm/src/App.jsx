import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Navbar from './components/navbar/Navbar.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
