import React from 'react';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
    // const [resInfo, setResInfo]=useState(null);
    // const params=useParams();
    // console.log(params);
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
// accordian logic one accordian at one time
    const[showIndex,setShowIndex]=useState(null);
  // earlier here was the same logic return in useRestaurant Menu
     
  if (!resInfo) {
    return <Shimmer />; // Or just return <h2>Loading...</h2>
    // here waiting for resInfo to be filled
  };

  const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

  const{itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  const categories=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log(categories);
  return  (
    <div className="text-center m-4 p-4">
        <h1 className='font-bold my-10 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>

        {/* {categories accordian} */}
        
           {categories.map((category,index)=>
           // controlled component
           <RestaurantCategory key={category.card.card.itemCards.map(item=>item.card.info.id)}  data={category.card?.card}
            showItem={index===showIndex ? true:false}
            // same accordian clicked twice logic
            setShowIndex={()=>setShowIndex(prevIndex => (prevIndex === index ? null : index))
}
            />)}
    </div>
  );
};

export default RestaurantMenu;