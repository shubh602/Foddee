import { Logo } from "../utils/constant";

let Header = () =>{
return(<div className="header-container">
       <span className="logo">
        <img src={Logo} />
       </span>

       <span className="nav">
            <span className="nav-link">Home</span>
            <span className="nav-link">About Us</span>
            <span className="nav-link">Contact US</span>
            <span className="nav-link">Cart</span>
       </span>
</div>)}

export default Header;