import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Normal from './components/Normal.jsx';
import User from './components/User.jsx';
import Owner from './components/Owner.jsx';
import Admin from './components/Admin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Normal />,
  },
  {
    path: "/user",
    element:<User />,
  },
  {
    path: "/admin",
    element:<Admin />,
  },
  {
    path: "/owner",
    element:<Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
