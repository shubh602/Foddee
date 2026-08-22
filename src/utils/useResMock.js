import { useEffect, useState } from "react";
import { mockAPI } from "./mockAPI";

const useResMock=()=>{
  const [newRes,setNewRes]=useState([]);

  useEffect(()=>{
     fetchAPI()
  },[])


  const fetchAPI=async()=>{
        const data=mockAPI?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setTimeout(() => {      
            setNewRes(data);
            }, 800);
   }

    
    return newRes;

}
export default useResMock;