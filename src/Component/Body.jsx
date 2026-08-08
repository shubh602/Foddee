import ProductCart from "./ProductCart";
import { resobj } from "../utils/mockdata";
import { useState,useEffect } from "react";
import { Shimmer } from "./Shimmer";

let Body = () =>{
  const [list,setList]=useState([])

  const [input,setInput]=useState("")

  const [showList,setShowList]=useState([])


  
useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{
    const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.4712374&lng=81.6829431&carousel=true&third_party_vendor=1")
    
    const jsonData=await data.json()

    await setList(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
    await setShowList(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
    console.log(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info);
  }

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
          let filterData=list.filter((res)=>res.info.avgRating>4.3)   
          setShowList(filterData)
        }}
        >FILTER</button>
 </div>       


    <div className="body-container">
     
     {
       showList.map((res) => <ProductCart key={res.info.id} resdata={res} />) 
     }
         
   </div>
</>
)}

export default Body;