
import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet, useSearchParams } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
  
const Grocery= lazy(()=>import("./components/Grocery"));
const AppLayout = () => {
    // console.log(<Body/>) virtual dom
    const[userInfo,setUserInfo]=useState();
    // Authentication logic
    useEffect(()=>{
        // make api call and send username and password
        const data={name:"Rohit Morya"};
        setUserInfo(data.name);
    },[]);
    return (
         <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userInfo,setUserInfo}}>
        <div className="app">
             <UserContext.Provider value={{loggedInUser : "Get a Job"}}>
            <Header/>
            </UserContext.Provider>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
       
}
const appRouter=createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children:[
        {
            path: "/",
            element:<Body/>,
            
        },
{
    path: "/about",
    element: <About />,
},
{
    path: "/contact",
    element: <Contact />,
},
{
    path: "/grocery",
    element: <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>,
},
{
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
},
{
        path:"/cart",
        element:<Cart/>,
},
    ],
    errorElement:<Error />,
},

]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}
future={{ v7_startTransition: true }}/>);
