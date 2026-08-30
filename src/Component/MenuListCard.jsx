import { Swiggy_Image_CDN } from "../utils/constant";

const MenuListCard=(props)=>{


    const {name,isVeg,price,defaultPrice,finalPrice,ratings,imageId}=props.props;

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
                <span className="bg-black text-white w-fit px-7 py-2 rounded-lg -mt-4 font-semibold cursor-pointer">+ Add</span>
            </div>
        </div>
    )
}


export default MenuListCard;