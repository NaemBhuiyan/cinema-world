import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders  link", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/watch list/i);
  expect(linkElement).toBeInTheDocument();
});
