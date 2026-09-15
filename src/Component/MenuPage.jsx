import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import { Shimmer } from "./Shimmer";
import { Swiggy_Image_CDN } from "../utils/constant";
import { MenuList1 } from "./MenuList1";
import { MenuList2 } from "./MenuList2";

const MenuPage=()=>{

 
     
    const param=useParams();
    const Menu=useMenu(param)
    // console.log(Menu);
    //  console.log(Menu[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    
   
     
 console.log(Menu);
    
if(Menu === undefined || Menu.length === 0) return <Shimmer />

let {name,cloudinaryImageId,avgRating,cuisines,areaName,sla} =Menu[2]?.card?.card?.info;

        const filterData=Menu[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res)=>res?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || res?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")

        

    return(
        <div className="dark:bg-black dark:text-white">
        <div className="pt-32 pb-5 px-2 lg:w-8/12 mx-auto flex flex-col space-y-8 dark:bg-gray-950">
                
               <div className="flex flex-col space-y-6">
                   <span className="font-bold text-3xl">{name}</span>
                   <img className="h-[450px] w-full rounded-2xl object-cover" src={Swiggy_Image_CDN + cloudinaryImageId} alt="" />
                   <div className="pb-2 flex flex-col space-y-1 font-bold border-b-2 border-gray-300">
                          <span><span className="text-gray-500">&#x2605;</span> {avgRating} </span>
                          <span className="text-orange-500 cursor-pointer">{cuisines.join(" , ")}</span>
                   </div>
                   <div className="pb-2 flex flex-col space-y-1 font-bold border-b-2 border-gray-300">
                          <span><span>Outlet :</span> {areaName} </span>
                          <span>{sla.slaString}</span>
                   </div>
               </div> 

               {/* <div className="flex justify-center py-8 border-b-2 border-gray-300">
                        <span className="text-3xl">Deals ....</span> 
               </div> */}

        {/* Accordian start */}

              <div className="flex flex-col space-y-5">
                   {filterData.map((item)=>{return(
                     item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"?
                    
                     <MenuList1 
                       key={item?.card?.card?.categoryId} 
                       props={item?.card?.card}
                     />

                    //  <h1 key={item?.card?.card?.categoryId} > </h1>
                    
                     :
                    //  <h1 key={item?.card?.card?.categoryId} >{console.log(item)}
                    //   </h1>
                    
                    <MenuList2 
                       key={item?.card?.card?.categoryId}
                       props={item?.card?.card} 
                    />

                   )})

                   }  
              </div>

        {/* Accordian end */}
         
        </div>
    </div>    
    )
}

export default MenuPage; 