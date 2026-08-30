import { useEffect, useState } from "react"

const useMenu=(param)=>{
        //  console.log(json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
       //  console.log(json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
      //  console.log(menu[2]?.card?.card?.info);


     const [menu,setMenu]=useState([])
     const id=param.id

     useEffect(()=>{
         API_Call()
     },[])

     const API_Call=async()=>{
       const URL=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4712374&lng=81.6829431&restaurantId=${id}`
      
       const data=await fetch(URL)
       const json=await data.json()
       setMenu(json?.data?.cards)
      }

      return menu

}

export default useMenu;