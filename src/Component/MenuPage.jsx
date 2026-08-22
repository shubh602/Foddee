import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MenuPage=()=>{

     const param=useParams();
     console.log(param.id)

     

    return(
        <div className="">
                <span>Resturant ID</span>: <span>{param.id}</span>
        </div>
    )
}

export default MenuPage; 