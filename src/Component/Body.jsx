import ProductCart ,{PromotedCart} from "./MenuCart";
import { useContext, useEffect, useState} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useResAPI from "../utils/useResAPI.js";
import useResMock from "../utils/useResMock.js";
import UseOnlineStatus from "../utils/useOnlineStatus.js";
import InternetStaus from "./InternetStatus.jsx";
import { userContext } from "../utils/UserContext.js";


let Body = () =>{
  const [input,setInput]=useState("")
  const [showList,setShowList]=useState([])

  const {Username,setInfo}=useContext(userContext)
  // console.log(setInfo);
  
  
  const list=useResMock();
  
  useEffect(()=>{
      setShowList(list)
  },[list])

  const Promotion=PromotedCart(ProductCart);

const status=UseOnlineStatus();
if(!status) return <InternetStaus />

  
return (!list.length)? <Shimmer /> : (
<>
 <div className="px-5 flex space-x-7 py-8">
  
      <div className="space-x-2">
            <input type="text" placeholder="Search..." name="" className="bg-gray-200 px-4 py-0.5 w-52 rounded-sm" value={input} onChange={(e)=>setInput(e.target.value)} id="" />
            <button className="bg-gray-300 px-3 py-0.5 rounded-sm" onClick={()=>{
              const filtered=list.filter((val)=>val.info.name.toLowerCase().includes(input.toLocaleLowerCase()) )
              setShowList(filtered) 
            }}>Search</button>  
      </div>    


        <button className="bg-gray-300 px-3 py-0.5 rounded-sm"
        onClick={()=>{
          let filterData=list.filter((res)=>res.info.avgRating>=4.3)   
          setShowList(filterData)
        }}
        >FILTER</button>

       <input type="text" placeholder="Change User..."
        name=""
        className="bg-gray-200 px-4 py-0.5 w-52 rounded-sm" 
        value={Username} onChange={(e)=>setInfo(e.target.value)} id="" />  

 </div>       


    <div className="px-5 py-5 flex flex-wrap space-x-4 space-y-8">
     
     {
       showList.map((res) => <Link key={res.info.id} to={"/menu/"+res.info.id} >
         {(res.info.avgRating>=4.3)?<Promotion resdata={res} /> : <ProductCart  resdata={res} />}
          </Link>) 
     }
         
   </div>
</>
)}

export default Body;