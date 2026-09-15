import { Component } from "react";
import UserClass from "./UserClass";
import { userContext } from "../utils/UserContext.js";


// const About = () =>{
//     return 
// }

class About extends Component{
    constructor(props){
        super(props)
    //    console.log(" Parent Constructor");
       
    }

    componentDidMount(){
    //    console.log(" parent Mount");
       
    }

    render(){
    //    console.log(" parent Render");
       
      return(
<div className="pt-32 px-8 bg-gray-100 dark:bg-black dark:text-white h-dvh">

    <h1 className="text-5xl font-bold flex items-end"> About Foodee <p className="font-bold text-[8px]"> - Good Food. Great Mood. Delivered.</p></h1>

            <div className="flex lg:px-8 pt-16">
                           
                <div className="mx-auto flex-col lg:flex-row flex space-x-1">

                        <div className="lg:w-5/12 italic">
                                <p className=""><span className="font-semibold">Welcome to Foodee ,</span> <br /> your go-to destination for delicious food delivered straight to your doorstep.</p>

                            
                                At Foodee, we believe that great food should be easy to discover, simple to order, and enjoyable from the very first bite. Whether you're craving a quick meal, comfort food, a delicious snack, or something special, Foodee brings a variety of flavors together in one convenient place.
                                <br /><br />

                               <p className="font-semibold"> What We Do</p>

                                Foodee connects you with your favorite meals from trusted restaurants and food partners. Browse the menu, choose what you're craving, place your order, and let us take care of the rest.
                              <br /><br />
       
                        </div>

                        <div className="dark:text-black text-white mt-6 lg:w-7/12 py-7 px-8 rounded-3xl -skew-1 shadow-2xl shadow-gray-500 font-semibold bg-cover 
                        bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6Ho6jR6843AgpKlvwGgPmG2S_HbEnbS0JEK735Z2BvRo0bBuUKluLkw&s=10')]">       
                        
                        <p className="font-bold  pb-4 text-3xl">Why Foodee?</p>
                            
                            <ul className="flex flex-col space-y-6 list-disc marker:content-['👉']">
                               <li className="pl-4"><span className="font-bold"> Wide Variety </span>- Explore different cuisines and dishes in one place. 
                               </li>
                               <li className="pl-4"><span className="font-bold">Easy Ordering </span> — Find your food and order in just a few clicks.
                               </li>
                               <li className="pl-4"><span className="font-bold">Reliable Delivery </span> — Get your favorite meals delivered to your doorstep.
                               </li>
                               <li className="pl-4"><span className="font-bold">Made for Food Lovers </span> — We’re all about making every meal more enjoyable.
                               </li>
                               <li className="pl-4"><span className="font-bold">Simple & Secure </span> — A smooth ordering experience from start to finish.
                                  Our Mission
                               </li>
                            </ul>

                        
                        </div>


                </div> 
                       
                               
            


    </div> 
            

        {/* <img className="rounded-lg h-[500px] mx-auto w-full"
            src=""
            alt="" />             */}
          
          {/* <UserClass name={"First"} location={"praygraj"} />
          <UserClass name={"Second"} location={"praygraj"} /> */}
     </div>)
    }
}


export default About;