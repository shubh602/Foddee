import { useEffect, useState } from "react"


const UseOnlineStatus=()=>{
 
    const [staus,setStatus]=useState(true)

    useEffect(()=>{

        window.addEventListener("online",()=>{
            setStatus(true)            
        })

       window.addEventListener("offline",()=>{
            setStatus(false)            
       })
    },[])

    return staus
}

export default UseOnlineStatus;