import { useRouteError } from "react-router-dom";

const Error=()=>{
    const error=useRouteError();
    console.log(error);
    
    return<div>
         <h1>!OOPS Something Went Wrong</h1>
         <span>{error.status}</span> 
         <span> {error.statusText}</span>
    </div>
}

export default Error;