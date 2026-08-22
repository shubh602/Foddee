import React, { lazy, Suspense } from "react";
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
import MenuPage from "./src/Component/MenuPage";



    const Grocery=lazy(()=>import("./src/Component/grocery"))
   
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
            path:'/grocery',
            element:<Suspense><Grocery /></Suspense>
          }, 
          {
            path:'/cart',
            element:<Cart />
          },{
            path:'/menu/:id',
            element:<MenuPage />
          }   
        ],
        errorElement:<Error />
    }
])


const root= ReactDOM.createRoot(document.getElementById("root"));  
root.render(<RouterProvider router={appRouter} />)

















