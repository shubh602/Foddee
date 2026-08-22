import React from "react"

class UserClass extends React.Component{

constructor(props){
        super(props)

        this.state={
            count:0,
            count2:2,
        }
    console.log(this.props.name + " constructor");

}

componentDidMount(){
    console.log(this.props.name + " component mounted");
    
}
    
render(){
    console.log(this.props.name + " component render");

            const {name , location}=this.props;
            const {count ,count2}=this.state;

            return <div className="user-container">
                <h2>
                    <span>Count :</span> <span>{count}</span>
                </h2>
                <button onClick={()=>{
                    this.setState({
                    count:this.state.count+1
                    })
                }}
                >Count</button>
                <h2>
                    <span>Count2 :</span> <span>{count2}</span>
                </h2>
                <h2>
                    <span>(Class) Name :</span> <span>{name}</span>
                </h2>
                <h2>
                    <span>Location :</span> <span>{location}</span>
                </h2>  
            </div>
}

}

export default UserClass;