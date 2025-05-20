import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
  // state variable super powreful variable
  const [listofRestaurants, setlistofRestauraunt] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);

  const [searchText, setsearchText] = useState("");

  // // Normal js variable
  // let listofRestaurantsJS = [
  //   {
  //     info: {
  //       id: "450851",
  //       name: "Brothers Bakery",
  //       cloudinaryImageId: "hd6ypa4m8ipzhgeross7",

  //       costForTwo: "₹1090 for two",
  //       cuisines: ["Bakery"],
  //       avgRating: 3.8,
  //       deliveryTime: 32,
  //       avgRatingString: "4.0",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "450852",
  //       name: "Rahul's Bakery",
  //       cloudinaryImageId: "hd6ypa4m8ipzhgeross7",

  //       costForTwo: "₹1090 for two",
  //       cuisines: ["Bakery"],
  //       avgRating: 4.5,
  //       deliveryTime: 35,
  //       avgRatingString: "4",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "450853",
  //       name: "MCD",
  //       cloudinaryImageId: "hd6ypa4m8ipzhgeross7",

  //       costForTwo: "₹1090 for two",
  //       cuisines: ["Bakery"],
  //       avgRating: 4.1,
  //       deliveryTime: 32,
  //       avgRatingString: "4.0",
  //     },
  //   },
  // ];
  // whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
 console.log("body rendered");

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);
  
 

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.4498954&lng=74.6399163&carousel=true&third_party_vendor=1"
      );
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();
      // console.log(json);
   
      

    // Update both listOfRestaurant and filteredRestaurant with the same data
    setlistofRestauraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  };
  // conditional rendering
  // if(listofRestaurants.length===0){
  //   return <Shimmer/>;
  // }
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            
          onKeyDown={(e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // prevent form submission or page reload if any
        // Run the same search logic here
        console.log(searchText);
        const filteredRestaurant = listofRestaurants.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filteredRestaurant);
      }
    }}

          ></input>
          <button
          
            onClick={() => {
              //Filter the restaurent Cards and Update the UI
              //KEEP TRACK OF search text
              console.log(searchText);
              const filteredRestaurant = listofRestaurants.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}

           
          >
            Search
          </button>
        </div>
        <button
  className="filter-btn"
          onClick={() => {
            //filter logic here
            const filterdList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filterdList);
            setFilteredRestaurant(filterdList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>  <RestaurantCard  resData={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
