import { useEffect, useState } from "react";


const useResAPI=()=>{
   
  const [newRes,setNewRes]=useState([]);

 useEffect(()=>{
    fetchData()
    },[])

    
  const fetchData = async()=>{
    const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.4712374&lng=81.6829431&carousel=true&third_party_vendor=1");  

    const jsonData=await data.json();

    setNewRes(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  } 
    
    return newRes;

}

export default useResAPI;