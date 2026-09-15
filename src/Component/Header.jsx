import { Logo } from "../utils/constant";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faUser , faPhone , faCartShopping , faBagShopping , faCartFlatbed , faBars , faXmark} from "@fortawesome/free-solid-svg-icons";



let Header = () =>{

const [loginBtn , setLoginBtn] = useState(false)
const {Username,setInfo}=useContext(userContext)
const [BgColor , setBgColor]=useState(false)
const [NavBar , setNavBar]=useState(false)


 const LoginChange=async()=>{
    await setLoginBtn(!loginBtn)
                                                     //   Dont know why it behaving like this 
    let Accout=await !loginBtn ?"shubham":"Guest";
    setInfo(Accout);
}

  // console.log(BgColor);
  

useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY >= 50 && window.scrollY <200){
    setBgColor(true)
    }
    else if(window.scrollY < 50){
    setBgColor(false) 
    }
    
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
const cartitems=useSelector((store)=>store.cart.items)
// console.log(cartitems);




return(<>
                   {/* Small Screen */}
  <div className={`dark:text-white block lg:hidden z-50 w-full fixed ${BgColor && "bg-gray-500"}`}>
      <div className="py-2 px-3 flex justify-between items-center ">
         <span className="text-2xl font-bold italic">🛵-FOODI </span>

          <ul className="flex items-center space-x-5 text-2xl font-semibold">
                 <Link to="/cart">
                    <span title="Cart" className=" relative nav-link flex flex-col">
                        <FontAwesomeIcon icon={faCartFlatbed } />
                        <span className="absolute left-3 dark:text-black text-gray-100 top-0.5 text-xs font-bold">{cartitems.length}</span>
                        {/* <span className="text-[10px] text-center">Cart</span> */}
                    </span>
                </Link>

                <span title="Cart" className=" relative nav-link flex flex-col" 
                  onClick={()=>{setNavBar(!NavBar)}}>
                        <FontAwesomeIcon icon={NavBar?faXmark:faBars } />
                        
                </span>  

          </ul>

      </div>         

  <div className={`${NavBar?"block":"hidden"} dark:text-white h-lvh ml-auto w-full bg-gray-500 text-gray-200 py-20 px-8`}>
            <ul className="text-center text-xl font-semibold space-y-10">
               
                <li className="">
                       <Link to="/"> <span><FontAwesomeIcon className="pr-4" icon={faHouse} /></span>Home</Link>
                </li>
                <li className="">
                      <Link to="/about"><span><FontAwesomeIcon className="pr-4" icon={faUser} /></span>About</Link>
                </li>
                <li className="">
                      <Link to="/contact"><span><FontAwesomeIcon className="pr-4" icon={faPhone} /></span>Contact</Link>
                </li>
                <li className="/grocery">
                      <Link to="/gro"><span><FontAwesomeIcon className="pr-4" icon={faCartShopping} /></span>Grocery</Link>
                </li>
                <li onClick={()=>{LoginChange()}} className="">
                      <button className={`${loginBtn?"bg-orange-500 px-3.5":"bg-gray-300 px-1.5"} mr-4  py-1 rounded-full relative border-4 border-gray-400 cursor-pointer`}
                        >
                        <span className="Online-status text-lg absolute -right-1 -bottom-2">{UseOnlineStatus()?"🟢":"🔴"}</span>
                        <span>{loginBtn? Username[0].toUpperCase() : <FontAwesomeIcon icon={faUser} />} </span>
                      </button>
                      <span>{Username}</span>
                </li>

            </ul>
  </div>

  </div>
   


                       {/* Big Header */}

  <div className={`dark:text-white hidden lg:block z-50 w-full fixed ${BgColor && "bg-gray-500 dark:bg-gray-900"}`}>
<div className="py-2 px-5 flex justify-between items-center ">
       
        {/* <img className="logo w-28" src={Logo} /> */}
         <span className="text-2xl font-bold italic">🛵-FOODI </span>
       

       <span className="flex items-center space-x-10 text-2xl font-semibold">
         
          <Link to="/"> 
                <span title="Home" className="nav-link flex flex-col">
                        <FontAwesomeIcon icon={faHouse} />
                        <span className="text-[10px] text-center">Home</span>
                </span>
          </Link>


          <Link to="/about">
                <span title="About_Us" className="nav-link flex flex-col">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="text-[10px] text-center">About</span>
                </span>
          </Link>
            <Link to="/contact">
                <span title="Contact_us" className="nav-link flex flex-col">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="text-[10px] text-center">Contact</span>
                </span>
            </Link>

            <Link to="/cart">
                <span title="Cart" className=" relative nav-link flex flex-col">
                    <FontAwesomeIcon icon={faCartFlatbed } />
                    <span className="absolute left-3 text-gray-100 dark:text-black  top-0.5 text-xs font-bold">{cartitems.length}</span>
                    <span className="text-[10px] text-center">Cart</span>
                </span>
            </Link> 

            <Link to="/grocery">
               <span title="Grocery" className="nav-link flex flex-col items-center">
                    <FontAwesomeIcon icon={faCartShopping} />
                    {/* <span className="text-[17px] text-center">GR</span> */}
                    
                </span>
            </Link>


            <button className={`${loginBtn?"bg-orange-500 px-3.5":"bg-gray-300 px-1.5"}  py-1 rounded-full relative border-4 border-gray-400 cursor-pointer`}
            onClick={()=>{LoginChange()}}>
            <span className="Online-status text-lg absolute -right-1 -bottom-2">{UseOnlineStatus()?"🟢":"🔴"}</span>
            <span>{loginBtn? Username[0].toUpperCase() : <FontAwesomeIcon icon={faUser} />} </span>
            </button>

            
       </span>
</div>
</div>                     

</>

)}

export default Header;   