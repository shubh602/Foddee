import ProductCart from "./MenuCart";
import { useEffect, useState} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useResAPI from "../utils/useResAPI.js";
import useResMock from "../utils/useResMock.js";
import UseOnlineStatus from "../utils/useOnlineStatus.js";
import InternetStaus from "./InternetStatus.jsx";

let Body = () =>{
  const [input,setInput]=useState("")
  const [showList,setShowList]=useState([])


  
  const fetchAPI=useResMock();
  const list=fetchAPI;
  
  useEffect(()=>{
      setShowList(list)
  },[list])


const status=UseOnlineStatus();
if(!status) return <InternetStaus />

  
return (!list.length)? <Shimmer /> : (
<>
 <div className="filters">
  
      <div className="Search">
            <input type="text" name="" className="search-input" value={input} onChange={(e)=>setInput(e.target.value)} id="" />
            <button className="search-btn" onClick={()=>{
              const filtered=list.filter((val)=>val.info.name.toLowerCase().includes(input.toLocaleLowerCase()) )
              setShowList(filtered) 
            }}>Search</button>  
      </div>    


        <button className="filter-btn"
        onClick={()=>{
          let filterData=list.filter((res)=>res.info.avgRating>=4.3)   
          setShowList(filterData)
        }}
        >FILTER</button>
 </div>       


    <div className="body-container">
     
     {
       showList.map((res) => <Link key={res.info.id} to={"/menu/"+res.info.id} > <ProductCart  resdata={res} /> </Link>) 
     }
         
   </div>
</>
)}

export default Body;