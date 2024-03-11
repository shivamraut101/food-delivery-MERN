import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript and Popper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './screens/Home.jsx';
import { Login } from './screens/Login.jsx';
import { Signup } from './screens/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/createuser",
    element:<Signup />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
