import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  // state variable super powreful variable
  const [listofRestaurants, setlistofRestauraunt] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);

  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted=WithPromotedLabel(RestaurantCard);

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
 console.log("body rendered",listofRestaurants);

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);
  
 

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.91360&lng=75.78580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();
      // console.log(json);
   
      

    // Update both listOfRestaurant and filteredRestaurant with the same data
    setlistofRestauraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false) return (<h1>Looks like you are offline! please check your internet connection</h1>);
  // conditional rendering
  // if(listofRestaurants.length===0){
  //   return <Shimmer/>;
  // }
    const {loggedInUser,setUserInfo}=useContext(UserContext);

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black"
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
          <button className="px-4 py-2 bg-green-100 hover:bg-green-200 m-4 rounded-xl"
          
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
        <div className="search m-4 p-4 flex items-center"> 
          <button
  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl"
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
        <div className="search m-4 p-4 flex items-center"> 
          <label>UserName: </label>
         <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}></input>
        </div>
       
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
           {restaurant.info.promoted ? (
            <RestaurantCardPromoted resData={restaurant}/>
           ): (<RestaurantCard resData={restaurant}/>)
            
        }
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
