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
import { userContext , DarkLight} from "./src/utils/UserContext";
import { Provider } from "react-redux";
import Appstore from "./src/utils/appStore";



    const Grocery=lazy(()=>import("./src/Component/Grocery"))
    

  
    let App = () =>{
 
      const [info,setInfo]=useState()
      const [mode,setMode]=useState(false)


    const user=useContext(userContext)
    // const flag=useContext(DarkLight)

      
    useEffect(()=>{
      setInfo(user.Username)
    },[])

    useEffect(()=>{
        if(mode)document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        
        
          
    },[mode])
    
     

        return(
        <Provider store={Appstore}> 
          <userContext.Provider value={{Username:info,setInfo:setInfo,mode:mode,setMode:setMode}}>
              <Header />   
              <Outlet />  
          </userContext.Provider>    
            </Provider>
            )};

const appRouter= createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
          {
            path:'/',
            element:<Body />
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

















