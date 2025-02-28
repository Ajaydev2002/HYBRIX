import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from './components/Dashboard.jsx';
import Authentication from './components/Authentication';
import Error from "./components/Error.jsx";


const Applayout = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="app">

      <Header isOpen={isOpen} toggle={toggle} />

      <div className="outlet-container" style={{ marginLeft: isOpen ? "240px" : "60px"}}>

        <Outlet />
        
      </div>
    </div>
  )
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Dashboard  isOpen={isOpen}/>
      },
      {
        path: "/Dashboard",
        element: <Dashboard isOpen={isOpen}/>
      },
      {
        path: "/Authentication",
        element: <Authentication />
      }
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);