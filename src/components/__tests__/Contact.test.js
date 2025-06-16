import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

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

 