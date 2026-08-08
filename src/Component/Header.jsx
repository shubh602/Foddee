import { Logo } from "../utils/constant";
import { useState } from "react";

let Header = () =>{

const [loginBtn , setLoginBtn] = useState("LogIn")

return(<div className="header-container">
       <span className="logo">
        <img src={Logo} />
       </span>

       <span className="nav">
            <span className="nav-link">Home</span>
            <span className="nav-link">About Us</span>
            <span className="nav-link">Contact US</span>
            <span className="nav-link">Cart</span>
            <button className="login-btn"
            onClick={()=>{setLoginBtn(loginBtn==="LogIn"?"LogOut":"LogIn")}}>
            {loginBtn}</button>
       </span>
</div>)}

export default Header;