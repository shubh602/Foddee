import ProductCart from "./ProductCart";
import { resobj } from "../utils/mockdata";
import { useState } from "react";

let Body = () =>{

  const [list,setList]=useState(resobj)

return(
<>
<button className="filter-btn"
 onClick={()=>{
  let filterData=list.filter((res)=>res.info.avgRating>4.3)   
  setList(filterData)
 }}
>FILTER</button>
    <div className="body-container">
     
     {
       list.map((res) => <ProductCart key={res.info.id} resdata={res} />) 
     }
         
   </div>
</>
)}

export default Body;