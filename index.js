import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
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
import { userContext } from "./src/utils/UserContext";



    const Grocery=lazy(()=>import("./src/Component/grocery"))
    

  
    let App = () =>{
 
      const [info,setInfo]=useState()

    const user=useContext(userContext)
      
    useEffect(()=>{
      setInfo(user.Username)
      // console.log(info);

    },[])
    
     

        return(<> 
          <userContext.Provider value={{Username:info,setInfo:setInfo}}>
              <Header />   
              <Outlet />  
          </userContext.Provider>    
            </>
            )};

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

















