import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const{cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla}=resData?.info;
    
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                alt="Restaurant logo" 
                src={CDN_URL+resData.info.cloudinaryImageId} 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4 style={{ fontSize: "14px" }}>{sla?.slaString}</h4>
        </div>
    );
  };

  export default RestaurantCard;