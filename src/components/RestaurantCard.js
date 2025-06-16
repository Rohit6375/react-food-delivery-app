import React,  { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const{cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla}=resData?.info;
    const data=useContext(UserContext);
    return (
        <div className="m-4 p-4 w-[270px] bg-gray-200 hover:bg-gray-300" >
            <img 
            className="rounded-lg hover:scale-105 transition-all duration-300 "
                alt="Restaurant logo" 
                src={CDN_URL+resData.info.cloudinaryImageId} 
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4 style={{ fontSize: "14px" }}>{sla?.slaString}</h4>
            <h4>{data.loggedInUser}</h4>
        </div>
    );
  };

  export const WithPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
  }

  export default RestaurantCard;