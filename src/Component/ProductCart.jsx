import { Cart_Image } from "../utils/constant";
import { Start_Icon } from "../utils/constant";

let ProductCart = (props) =>{

     const {resdata}=props;
     
     const {name,avgRating,sla,costForTwo}=resdata?.info;
   
return(
    <div className="product-cart">
        <img className="cart-img" src={Cart_Image} />
        <span className="cart-detail">
              <span className="cart-rating"><span >
                <img className="cart-star" src={Start_Icon} />
              </span>
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