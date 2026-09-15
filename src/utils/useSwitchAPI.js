import { useEffect, useState } from "react";
import { useContext } from "react";
import { userContext } from "./UserContext";
import { mockAPI } from "./mockAPI";



const useSwitchAPI=()=>{
   
  const [newRes,setNewRes]=useState([]);

  const {Username}=useContext(userContext) 

    
  const fetchDataAPI = async()=>{
    const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.4712374&lng=81.6829431&carousel=true&third_party_vendor=1");  
    const jsonData=await data.json();
    setNewRes(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  } 

    const fetchAPIMock=async()=>{
          const data=mockAPI?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setTimeout(() => {      
              setNewRes(data);
              }, 800);
     }

     
 useEffect(()=>{
    Username == "Guest" ? fetchAPIMock() : fetchDataAPI() 
    },[Username])

     
    return newRes;

}

export default useSwitchAPI;