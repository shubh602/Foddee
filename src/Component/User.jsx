import { useState } from "react";

const User=({name , location})=>{
 const [count ,setCount]=useState(0)
 const [count2,setCount2]=useState(2)


    return(
        <div className="user-container">
            <h2>
                <span>Count :</span> <span>{count}</span>
            </h2>
            <h2>
                <span>Count2 :</span> <span>{count2}</span>
            </h2>
            <h2>
                <span>Name :(Fun)</span> <span>{name}</span>
            </h2>
            <h2>
                 <span>Location :</span> <span>{location}</span>
            </h2>  
        </div>
    )
}


export default User;