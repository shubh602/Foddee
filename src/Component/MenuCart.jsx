import { useContext } from "react";
import { Cart_Image , Swiggy_Image_CDN , Start_Icon } from "../utils/constant";
import { userContext } from "../utils/UserContext";

let ProductCart = (props) =>{

     const {resdata}=props;
     
     const {name,avgRating,sla,costForTwo,cloudinaryImageId}=resdata?.info;

   
return(
    <div className="group flex flex-col bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white hover:bg-gray-300 p-3 rounded-lg space-y-0.5"
     data-testid="Menu-id"
    >
        <img className="h-[350px] lg:h-[370px] rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-[0.98]" src={Swiggy_Image_CDN+cloudinaryImageId} />
        <span className="flex justify-between">
              <span className="flex">
                <span>⭐</span>
                 {/* <img className="w-5 h-5 rounded-full" src={Start_Icon} /> */}
                 <span>{avgRating}</span>
              </span>
              <span className="">{sla.deliveryTime} min</span>
        </span>
        
        <span className="font-bold">{name}</span>  
        
        <span className=""> 
        <span className="font-semibold"> Cusien's :</span> biryani , north indian , south indian, chines , italian 
        </span>

       <span className="pt-6">{costForTwo}</span>

    </div>
)}


export const PromotedCart=(ProductCart)=>{
    //  const {Username}=useContext(userContext)
    return(props)=>{
   return(
        <div className="relative">
            <label className="z-10 px-2 absolute bottom-0 right-1 bg-gray-700 text-white rounded-lg">
                🔥 Hyped 
                </label>
            <ProductCart {...props} />
        </div>)
    }
}

export default ProductCart;