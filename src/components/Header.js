import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
const Header = () => {
  //   let btnName = "Login";// can't update ui with normal js variable that's why we use state variables
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("header render");
  // if no dependency array use effect called on every render
  //  useEffect(()=>{
  //   console.log("useeffect called");
  // });

  // if dependency array is empty use effect is called  on only initial render
  // if dependency array is [btnnamereact] useeffect called everytime btnnamereact is updated
 useEffect(()=>{
    console.log("useeffect called");
  },[btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              if (btnNameReact === "Login") {
                setbtnNameReact("Logout");
              }
              else  setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
