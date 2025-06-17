import { render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("should render body comp with search button", async ()=>{

  await act(async ()=>{
    render(
        <BrowserRouter><Body/></BrowserRouter>
    )
  })
  
const searchBtn = await screen.findByRole("button", { name: "Search" });

console.log(searchBtn);
  expect(searchBtn).toBeInTheDocument();

})