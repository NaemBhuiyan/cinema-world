import { render, screen } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import TopBar from "../Topbar";

const MockTopBarComponent = () => {
  return (
    <BrowserRouter>
      <TopBar></TopBar>
    </BrowserRouter>
  );
};

// test("Check if Watch List append", () => {
//   render(<MockTopBarComponent />);
//   const linkElement = screen.getByText(/Watch List/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("Check count zero", () => {
  render(<MockTopBarComponent />);
  const linkElement = screen.getByText("0");
  expect(linkElement).toBeInTheDocument();
});
