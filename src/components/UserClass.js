import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
       
console.log("Constructor called");
        this.state={
            // count:0,
            // count2:2,
            userInfo:{
                Name:"dummy",
                location:"default",
            },
        };
        
    };
  async componentDidMount() {
    console.log("component did mount");
    try {
        const data = await fetch("https://api.github.com/users/rohit6375");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo: json,
        });
    } catch (error) {
        console.error("Error fetching user info:", error);
    }
};
componentDidUpdate(){
    console.log("component updated")
}
componentWillUnmount(){
    console.log("moved to new page");
}
    
   render(){
    console.log("rendered");
    
    const{name,location,id,avatar_url}=this.state.userInfo;

    return (
       <div className="border border-solid border-black p-2">
        {/* <h1>Count:{this.state.count}</h1> */}
        {/* <button onClick={()=>{
             this.setState({
                count:this.state.count +1,
                count2:this.state.count2 +1,
             })
        }}>
        Count
        </button> */}
        {/* <h1>Count:{this.state.count2}</h1> */}
        <img className=" w-[250px]" src={avatar_url}></img>
        <h2 className="font-bold">Name: {name}</h2>
        <h3>{location}</h3>
        <h4>id: {id}</h4>
      </div>
    );
   }
};

export default UserClass;