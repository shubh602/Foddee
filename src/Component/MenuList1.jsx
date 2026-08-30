import { useState } from "react"
import MenuListCard from "./MenuListCard"

export const MenuList1=({props,color})=>{
     
   
    const [show,setShow]=useState(true)    
    

    function showCart(){
        setShow(!show)
        
    }

    
    const {title,itemCards}=props
    
    

    return(<div className="p-3 border-b-8 border-gray-300 ">
             <div className="flex justify-between items-center cursor-pointer" onClick={()=>{showCart()}}>
                <span className={` ${color?`text-gray-700 font-semibold`:'text-black font-bold'} text-xl`}>{title} ({itemCards.length})</span>
                <span className="">{show?"▲":"▼"} </span>
             </div>
             {
                itemCards.map((item)=>{
                    
                   return(show && 
                     <MenuListCard key={item.card.info.id} props={item.card.info} />
                    )
                    
                })
             }
    </div>)
}

