import { Swiggy_Image_CDN } from "../utils/constant";
import { addCart, removeCart } from "../utils/cartslice";
import { useDispatch, useSelector } from "react-redux";

const MenuListCard=({props,flag})=>{


    const {name,isVeg,price,defaultPrice,finalPrice,ratings,imageId}=props;

    const dispatch=useDispatch()

    const CartItems=useSelector((store)=>store.cart.items)

    const addItem=(props)=>{
       if(CartItems.length < 99) dispatch(addCart(props))
       else if(CartItems.length >= 99)alert("too many items");
    }

    const removeItem=(props)=>{
        console.log(props);
        
        dispatch(removeCart(props.id))
    }

    

    return(
        <div className="flex items-center justify-between p-5 border-b border-gray-500">
            <div className="flex flex-col space-y-1">
                     <span className={`border-2 ${isVeg?"border-green-500":"border-red-500"} text-xs w-fit rounded-sm`}>{isVeg?"🟢":"🔴"}</span>
                     <span className="text-xl font-bold">{name}</span>
                     <span className="text-gray-500">Rs {finalPrice?finalPrice/100:price?price/100:defaultPrice/100}</span>
                     <span>&#x2605;{ratings.aggregatedRating.rating}({ratings.aggregatedRating.ratingCountV2})</span>
            </div>
            <div className="flex flex-col items-center">
                <img className="h-28 w-36 rounded-xl" src={Swiggy_Image_CDN+imageId} alt="" />
                <span className="bg-black dark:bg-gray-300 dark:text-black text-white w-fit px-7 py-2 rounded-lg -mt-4 font-semibold cursor-pointer"
                 onClick={flag?()=>addItem(props):()=>removeItem(props)}
                >
                    {flag?"+ Add":"Remove"}
                </span>
            </div>
        </div>
    )
}


export default MenuListCard;