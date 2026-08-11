import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import Footer from "./src/Component/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Contact from "./src/Component/Contact";
import Error from "./src/Component/Error";
import About from "./src/Component/About";
import Cart from "./src/Component/Cart";


    let App = () =>(
    <> 
       <Header />   
       <Outlet />  
    </>
    );

const appRouter= createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
          {
            path:'/',
            element:
            <>
            <Body />
            <Footer />
            </>
          }, 
          {
            path:'/contact',
            element:<Contact />
          }, 
          {
            path:'/about',
            element:<About />
          }, 
          {
            path:'/cart',
            element:<Cart />
          }   
        ],
        errorElement:<Error />
    }
])


const root= ReactDOM.createRoot(document.getElementById("root"));  
root.render(<RouterProvider router={appRouter} />)

















