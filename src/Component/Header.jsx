import { Logo } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";

let Header = () =>{

const [loginBtn , setLoginBtn] = useState("LogIn")




return(<div className="header-container">
       <span className="logo">
        <img src={Logo} />
       </span>

       <span className="nav">
            <span className="nav-link"><Link to="/">Home </Link></span>
            <span className="nav-link"><Link to="/about">About Us</Link></span>
            <span className="nav-link"><Link to="/contact">Contact US</Link></span>
            <span className="nav-link"><Link to="/cart">Cart</Link></span>
            <span className="nav-link"><Link to="/grocery">Grocery</Link></span>
            <button className="login-btn"
            onClick={()=>{setLoginBtn(loginBtn==="LogIn"?"LogOut":"LogIn")}}>
            <span>{loginBtn}</span>
            <span className="Online-status">{UseOnlineStatus()?"🟢":"🔴"}</span>
            </button>
       </span>
</div>)}

export default Header;   