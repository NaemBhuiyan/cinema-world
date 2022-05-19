import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../index";

const MockHomePage = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HomePage></HomePage>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

test("Check if loading", async () => {
  render(<MockHomePage />);
  const linkElement = screen.getByRole("row");
  expect(linkElement).toBeInTheDocument();
  // await waitFor(() => {
  //   expect(screen.getByText("Loading...")).toBeInTheDocument();
  // });
});
