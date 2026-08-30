import { Logo } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../utils/UserContext";

let Header = () =>{

const [loginBtn , setLoginBtn] = useState("LogIn")

const {Username,setInfo}=useContext(userContext)
// console.log(setInfo);



return(<div className="px-5 flex justify-between items-center">
       <span>
        <img className="logo w-28" src={Logo} />
       </span>

       <span className="space-x-10">
            <span className="nav-link"><Link to="/">Home </Link></span>
            <span className="nav-link"><Link to="/about">About Us</Link></span>
            <span className="nav-link"><Link to="/contact">Contact US</Link></span>
            <span className="nav-link"><Link to="/cart">Cart</Link></span>
            <span className="nav-link"><Link to="/grocery">Grocery</Link></span>
            <button className="bg-gray-300 px-3 py-1 rounded-sm"
            onClick={()=>{setLoginBtn(loginBtn==="LogIn"?"LogOut":"LogIn")}}>
            <span className="Online-status">{UseOnlineStatus()?"🟢":"🔴"}{Username}</span>
            <span> : {loginBtn} </span>
            </button>
            
       </span>
</div>)}

export default Header;   