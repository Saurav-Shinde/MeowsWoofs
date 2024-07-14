import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from "./Pages/Contact";
import reportWebVitals from './reportWebVitals';
import Signin from './Pages/Signin';
import Shop from "./Pages/Shop";
import Register from "./Pages/Register";
import Product from './Pages/Product';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PaymentC from './Components/PaymentC/PaymentC';
import Home from './Pages/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/product/$product.id",
    element: <Product />,
  },
  {
    path:"/payment",
    element: <PaymentC />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
