import { useContext } from "react";
import { Cart_Image , Swiggy_Image_CDN , Start_Icon } from "../utils/constant";
import { userContext } from "../utils/UserContext";

let ProductCart = (props) =>{

     const {resdata}=props;
     
     const {name,avgRating,sla,costForTwo,cloudinaryImageId}=resdata?.info;

   
return(
    <div className="group w-[350px] flex flex-col bg-gray-200 hover:bg-gray-300 p-3 rounded-lg space-y-0.5">
        <img className="w-[340px] h-[350px] rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-[0.98]" src={Swiggy_Image_CDN+cloudinaryImageId} />
        <span className="flex justify-between">
              <span className="flex">
                 <img className="w-5 h-5 rounded-full" src={Start_Icon} />
                 <span>{avgRating}</span>
              </span>
              <span className="">{sla.deliveryTime} min</span>
        </span>
        
        <span className="font-bold">{name}</span>  
        
        <span className=""> 
        <span className=""> cusiens :</span> biryani , north indian , south indian, chines , italian 
        </span>

       <span className="">{costForTwo}</span>

    </div>
)}


export const PromotedCart=(ProductCart)=>{
     const {Username}=useContext(userContext)
    return(props)=>{
   return(
        <div className="">
            <label className="z-10 absolute px-2 py-0.5 bg-black text-white rounded-lg">More Liked 👍</label>
            <ProductCart {...props} />
        </div>)
    }
}

export default ProductCart;