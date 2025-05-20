import React from 'react';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
const RestaurantMenu = () => {
    const [resInfo, setResInfo]=useState(null);
    // const params=useParams();
    // console.log(params);
    const {resId}=useParams();
     useEffect(()=>{
         fetchMenu();
     },[]);

     const fetchMenu=async ()=>{
        try {
        const data=await fetch(MENU_API+resId);

        if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

        const json =await data.json();
        console.log(json);

      setResInfo(json?.data);
    } catch (error) {
    console.error("Error fetching data:", error);
  };

     };
     
  if (!resInfo) {
    return <Shimmer />; // Or just return <h2>Loading...</h2>
    // here waiting for resInfo to be filled
  };

  const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

  const{itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return  (
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <h3></h3>
        <ul>

            {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>
            <li>Diet coke</li> */}
            {itemCards.map(item=>(
                <li key={item.card.info.id}>{item.card.info.name} - {"Rs"} {(item.card.info.price)/100 || (item.card.info.defaultPrice)/100 || (item.card.info.finalPrice)/100 }</li>
            ))}
        </ul>
    </div>
  );
};

export default RestaurantMenu;