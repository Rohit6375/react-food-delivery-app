import { render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should load restaurant menu component", async () => {
  render(<BrowserRouter><RestaurantMenu /></BrowserRouter> ); // no need for act()

  // Use findByText because content loads after async fetch
  const accordianHeader = await screen.findByText("Veggie Feast");

  expect(accordianHeader).toBeInTheDocument();
});
