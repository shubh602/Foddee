import ProductCart ,{PromotedCart} from "./MenuCart";
import { useContext, useEffect, useState} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

import useResAPI from "../utils/useResAPI.js";
import useResMock from "../utils/useResMock.js";
import useSwitchAPI from "../utils/useSwitchAPI.js";

import UseOnlineStatus from "../utils/useOnlineStatus.js";
import InternetStaus from "./InternetStatus.jsx";
import { userContext } from "../utils/UserContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch , faFilter , faFilterCircleXmark , faSun ,faMoon, faL} from "@fortawesome/free-solid-svg-icons";


let Body = () =>{
  const [input,setInput]=useState("")
  const [showList,setShowList]=useState([])
  const [filter,setFilter]=useState(false)

  const {Username,mode,setMode}=useContext(userContext)

  

  const list=useSwitchAPI();
  
  useEffect(()=>{
      setShowList(list)
  },[list,Username])

const Promotion=PromotedCart(ProductCart);

const status=UseOnlineStatus();
if(!status) return <InternetStaus />


  
return (!list.length)? <Shimmer /> : (
<div className="overflow-x-hidden">

                                   {/* Filter START */}

 <div className="px-2 lg:px-5 pt-32 flex flex-col lg:flex-row items-end lg:justify-between space-y-4 space-x-4 py-8 dark:bg-black dark:text-white ">
  
      <div className="space-x-2 relative -mr-3">
            <input type="text" placeholder="Search..." name="" 
                className="bg-gray-200 dark:text-black px-4 py-0.5 w-72 lg:w-96 rounded-sm "
                value={input} onChange={(e)=>setInput(e.target.value)} id="" />

            <button className="bg-gray-800 dark:bg-gray-600 text-white px-2.5 py-0 text-xl rounded-sm absolute -ml-13 cursor-pointer"
             onClick={()=>{
              const filtered=list.filter((val)=>val.info.name.toLowerCase().includes(input.toLocaleLowerCase()) )
              setShowList(filtered) 
            }}>
              <FontAwesomeIcon icon={faSearch} />
            </button>  

      </div>    

       <div className="flex space-x-6">
             <button className="bg-gray-300 dark:bg-gray-700 px-1 py-0.5 rounded-sm cursor-pointer"
              data-testid="filter-id"
              onClick={()=>{
                    let filterData=list.filter((res)=>res.info.avgRating>=4.3)   
                    setShowList(filter?list:filterData)
                    setFilter(!filter)
              }}>
              <FontAwesomeIcon icon={filter?faFilterCircleXmark:faFilter} />
              </button>

            <button className="bg-gray-300 dark:bg-gray-700 px-2 py-0.5 rounded-2xl space-x-2"
              onClick={()=>setMode(!mode)}>
                <FontAwesomeIcon icon={faMoon} className={`${mode ? "text-gray-50":"text-gray-200"}`} /> 
                <FontAwesomeIcon icon={faSun} className={`${!mode ? "text-orange-500":"text-orange-950"}`} /> 
                {/* <span className="pl-1 font-semibold">Dark</span>  */}
            </button> 

        </div> 
        

        
        

{/* 
       <input type="text" placeholder="Change User..."
        data-testid="searchInput"
        name=""
        className="bg-gray-200 px-4 py-0.5 w-52 rounded-sm" 
        value={Username} onChange={(e)=>setInfo(e.target.value)} id="" />   */}

 </div>       

                                   {/* Filter End */}


    <div className="dark:bg-black px-3 lg:px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-6 space-y-8">
     
     {
       showList.map((res) => <Link key={res.info.id} to={"/menu/"+res.info.id} >
         {(res.info.avgRating>=4.3)?<Promotion resdata={res} /> : <ProductCart  resdata={res} />}
          </Link>) 
     }
         
   </div>
</div>
)}

export default Body;