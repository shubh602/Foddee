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
       
      return( <div>
          <h1>About Us</h1>

          <UserClass name={"First"} location={"praygraj"} />
          <UserClass name={"Second"} location={"praygraj"} />
     </div>)
    }
}


export default About;