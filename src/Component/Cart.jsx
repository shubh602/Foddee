import { useDispatch, useSelector } from "react-redux";
import MenuListCard from "./MenuListCard";
import { clearCart } from "../utils/cartslice";
import { useEffect, useState } from "react";

const Cart = () =>{

     const [TotalPrice , setTotalPrice]=useState([0,0])

    const cartItem=useSelector((store)=>store.cart.items)

    
    console.log(cartItem);
    
    const dispatch=useDispatch()

    const clearAll=()=>{
        dispatch(clearCart())
    }

    function CalculatePrice(){
       let Price=0;
       let tax=0
       for(let i=0;i<cartItem.length;i++){
       let itemPrice=cartItem[i].price ? cartItem[i].price : cartItem[i].defaultPrice;   
       Price=Price+itemPrice/100
       tax=tax+15
       }
       setTotalPrice([Price,tax]) 
    }

     useEffect(()=>{
      CalculatePrice()
    },[cartItem])
    


    return( 
    <div className="pt-32 px-3 md:px-6 dark:bg-black dark:text-white">
    <h1 className="w-6/12 pb-10 p-2 text-center text-2xl font-bold text-nowrap">Cart - Items</h1>
    <div className="flex flex-col-reverse md:flex-row">

        {/* Show Cart */}

            <div className="md:w-6/12 flex flex-col space-y-4  justify-center scrollbar-hide">
            
            {
               (cartItem.length)  ? <button
            className="my-4 p-2 rounded-sm bg-black text-white font-bold w-fit"
            onClick={()=>clearAll()}>
            Clear
            </button>: " "
            }
            

            {
                cartItem.map((item,index)=>{
                return <MenuListCard key={index} flag={false} props={item} />
                })
            }
      
             </div>

       {/* Pament Summary */}
          <div className="md:w-6/12 md:border-l-2 md:px-14 pb-12">
               <div className="flex flex-col space-y-6">
                  <span className="pb-4 text-xl font-bold text-nowrap">Payment Summary</span>          

                   <span className="px-4 flex items-center justify-between font-semibold">
                        <span className=" text-nowrap">Items ({cartItem.length}) : </span>
                        <span>&#x20B9; 
                          {TotalPrice[0]} 
                          </span>
                   </span>         

                          

                   
                   <span className="px-4 flex items-center justify-between font-semibold">
                        <span> <button title="&#x20B9; 15 Per Order" className="bg-gray-400 py-0 px-1.5 cursor-pointer text-xs rounded-full text-nowrap">i</button> GST & Other Charges :</span>
                        <span>&#x20B9;
                         {TotalPrice[1]}
                        </span>
                   </span>         

                   
                   
                   <span className="px-4 pt-4 font-bold text-lg border-t-2 flex items-center justify-between">
                        <span className=" text-nowrap">Order Total :</span>
                        <span>&#x20B9; {TotalPrice[0] + TotalPrice[1]}</span>
                   </span>     

                   <button className="mt-6 bg-green-700 hover:bg-green-900 text-white py-4 font-bold rounded-lg cursor-pointer">Place Order</button>    


               </div>
          </div>


    </div>
     
    </div>
    )
}

export default Cart;