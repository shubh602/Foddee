import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import Footer from "./src/Component/Footer";


    let App = () =>(
    <> 
       <Header />   
       <Body />
       <Footer />
    </>
    );


const root= ReactDOM.createRoot(document.getElementById("root"));  
root.render(<App />)

















