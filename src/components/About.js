 import User from "./User";
 import UserClass from "./UserClass";
 import React from "react";
 import UserContext from "../utils/UserContext";

 class About extends React.Component{
    constructor(){
        super();
        console.log("parent constructor called");
    };
    componentDidMount(){
        console.log("parent did mount");
    };
    render(){
        console.log("parent render")
        return (
        <div className="p-2 m-2">
            <h1 className="">About</h1>
            <h2 className="">Welcome to Rohit's World</h2>
            <div> 
                <UserContext.Consumer>
                    {data=><h1>{data.loggedInUser}</h1>}
                   
                </UserContext.Consumer>
                </div>
          {/* <User name={"Rohit (functional)"} location={"Ajmer"}
          contact={"Rohit@6375"}/> */}
          <UserClass Name={"child1(classes)"} location={"Ajmer (class)"}
          contact={"Rohit@6375 (class)"}/>
          
        </div>
        );
    }
 };
 
export default About;