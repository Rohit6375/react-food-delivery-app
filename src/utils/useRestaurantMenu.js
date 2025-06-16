import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);

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
    return resInfo;
}
export default useRestaurantMenu;