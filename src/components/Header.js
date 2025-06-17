import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  //   let btnName = "Login";// can't update ui with normal js variable that's why we use state variables
  const [btnNameReact, setbtnNameReact] = useState("Login");
  // console.log("header render");
  const data=useContext(UserContext);
  // if no dependency array use effect called on every render
  //  useEffect(()=>{
  //   console.log("useeffect called");
  // });

  // if dependency array is empty use effect is called  on only initial render
  // if dependency array is [btnnamereact] useeffect called everytime btnnamereact is updated
 useEffect(()=>{
    // console.log("useeffect called");
  },[btnNameReact]);
  const onlineStatus=useOnlineStatus();
  
  // console.log(data.loggedInUser);
 // subscribing to store using selector
  const cartItems=useSelector((store)=>store.cart.items);
  // console.log(cartItems);
  return (
   <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
  <div className="logo-container">
    <img className="w-56" src={LOGO_URL} />
  </div>
  <div className="flex items-center">
    <ul className="flex p-4 m-4 items-center">
      <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
      <li className="px-4 m-2 border border-solid border-black rounded-lg hover:bg-green-200">
        <Link to="/">Home</Link>
      </li>
      <li className="px-4 m-2 border border-solid border-black rounded-lg hover:bg-green-200">
        <Link to="/about">About Us</Link>
      </li>
      <li className="px-4 m-2 border border-solid border-black rounded-lg hover:bg-green-200">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="px-4 m-2 border border-solid border-black rounded-lg hover:bg-green-200 ">
        <Link to="/grocery">Grocery</Link>
      </li>
     <li className="px-4 m-2 rounded-lg hover:bg-green-200 text-2xl cursor-pointer flex items-center gap-2 border border-solid border-black">
      <Link to="/cart"><FaShoppingCart /></Link>
      <Link to="/cart"><span className="text-lg mt-1">{cartItems.length}-items</span></Link>
  
  
</li>
      
      {/* Wrap the login button in <li> */}
      <li className=" m-1">
        <button
          className="px-4  border border-black rounded-lg hover:bg-green-200"
          onClick={() => {
            setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>
      </li>

      {/* Wrap loggedInUser in <li> */}
      <li className="px-4 font-bold">{data.loggedInUser}</li>
    </ul>
  </div>
</div>

  );
};

export default Header;
