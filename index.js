import React from "react";
import ReactDOM from "react-dom/client";



// const heading= React.createElement("h1",{id:"heading"},"hello world");
// const child=React.createElement("div",{id:"child"},[heading,heading])
// const parent=React.createElement("div",{id:"parent"},[child,child])


// Both are same


let Info = () => (
  <div>
      <h2>this is info </h2>
  </div>
)


// component composition
let Heading = (<div>
   <h1>This is heading ✌️</h1> 
   <Info />
   </div>);



const root= ReactDOM.createRoot(document.getElementById("root"));  
root.render(Heading)

















