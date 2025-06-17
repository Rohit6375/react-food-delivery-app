import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("should load header componenet with a login button",()=>{
  
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
</Provider>
</BrowserRouter>
              
 )
 //assertion
//  const loginButton=screen.getByRole("button");
 const loginButton=screen.getByText("Login");
 expect(loginButton).toBeInTheDocument();

});


it("should change login button to logout on click",()=>{
  
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
</Provider>
</BrowserRouter>
              
 )
 //assertion
//  const loginButton=screen.getByRole("button");
 const loginButton=screen.getByRole("button", {name:"Login"});
 fireEvent.click(loginButton);
 const logoutButton=screen.getByRole("button", {name:"Logout"});
 expect(logoutButton).toBeInTheDocument();

});
 