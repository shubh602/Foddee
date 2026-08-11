import { Cart_Image , Swiggy_Image_CDN , Start_Icon } from "../utils/constant";

let ProductCart = (props) =>{

     const {resdata}=props;
     
     const {name,avgRating,sla,costForTwo,cloudinaryImageId}=resdata?.info;
   
return(
    <div className="product-cart">
        <img className="cart-img" src={Swiggy_Image_CDN+cloudinaryImageId} />
        <span className="cart-detail">
              <span className="cart-rating">
                 <img className="cart-star" src={Start_Icon} />
                 <span>{avgRating}</span>
              </span>
              <span className="cart-time">{sla.deliveryTime} min</span>
        </span>
        
        <span className="cart-desc-logo">{name}</span>  
        
        <span className="cart-desc"> 
        <span className="cart-desc-logo"> cusiens :</span> biryani , north indian , south indian, chines , italian 
        </span>

       <span className="cart-desc-logo">{costForTwo}</span>

    </div>
)}


export default ProductCart;