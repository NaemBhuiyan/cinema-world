import { render, screen } from "@testing-library/react";
import { useFatchDetails } from "../../features/MovieDetails/useFatchDetails";
import MovieDetails from "./MovieDetails";

jest.mock("../../features/MovieDetails/useFatchDetails", () => ({
  useFatchDetails: jest.fn(),
}));

describe("movie details page", () => {
  beforeEach(() => {
    useFatchDetails.mockImplementation(() => ({}));
  });

  describe("while loading", () => {
    it("renders a loader", () => {
      useFatchDetails.mockImplementation(() => ({
        isLoading: true,
      }));
      render(<MovieDetails />);
      const linkElement = screen.getByTestId("loader");
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("with an error", () => {
    it("renders an error message", () => {
      useFatchDetails.mockImplementation(() => ({
        isError: true,
      }));

      const { container } = render(<MovieDetails />);
      // const linkElement = screen.getByTestId("loader");
      expect(container.innerHTML).toMatch("Data not found");
    });
  });
});
