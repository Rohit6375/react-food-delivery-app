import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact us Page test cases",()=>{
test('should load contact us comp', () => { 
     render(<Contact/>)
     const heading=screen.getByRole("heading");
     // assertion
     expect(heading).toBeInTheDocument();
 });
test('should load button inside contact comp', () => { 
     render(<Contact/>)
     const button=screen.getByRole("button");
     // assertion
     expect(button).toBeInTheDocument();
 });
test('should find submit inside contact comp', () => { 
     render(<Contact/>)
     const submit=screen.getByText("Submit");
     // assertion
     expect(submit).toBeInTheDocument();
 });
test('should find submit inside contact comp', () => { 
     render(<Contact/>)
     const inputName=screen.getByPlaceholderText("name");
     // assertion
     expect(inputName).toBeInTheDocument();
 });
 test("should load 2 input boxes on the contact component",()=>{
    render(<Contact/>)
    const inputBoxes=screen.getAllByRole("textbox");
//  console.log(inputBoxes[0]); 2
    //asserstion

     expect(inputBoxes.length)./*not*/toBe(2);
 })
})



 