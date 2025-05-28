import React, { useState } from 'react';
import { ItemList } from "./ItemList";
const RestaurantCategory = ({data,showItem,setShowIndex}) => { // if we recieve data like {data} this then we don't need to to do data.data
    // console.log(data)
    // const[showItem,setShowItems]=useState(false);
    const {title,itemCards}=data;
    const handleClick=()=>{
        setShowIndex();
    };

  return (
    <div>
        {/* header */}
        <div className='w-7/12 mx-auto my-4 bg-gray-100 p-4 '>
           <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className='font-bold text-lg' >{title} ({itemCards.length})</span>
            <span>⬇️</span>
            </div> 
 {/* content accordian body new comp */}
           {showItem && <ItemList items={data.itemCards}/>}
        </div>
       
       
    </div>
  );
};

export default RestaurantCategory;