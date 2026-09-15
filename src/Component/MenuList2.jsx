import { useState } from "react"
import MenuListCard from "./MenuListCard"
import { MenuList1 } from "./MenuList1"
import { Logo } from "../utils/constant"

export const MenuList2=({props})=>{

     const {title,categories}=props

     return(
        <div className="flex flex-col space-y-4 border-gray-300 ">
             <span className="font-bold text-xl">{title}</span>
        {
            categories.map((item,index)=>{
               return <MenuList1 
                           key={item.categoryId}
                           props={item}
                           color={true}
                           flag={true}
                     />
            })
        }

        </div>     
     )

}
