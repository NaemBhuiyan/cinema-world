import { render, screen } from "@testing-library/react";
import { useFatchDetails } from "../../features/MovieDetails/useFatchDetails";
import MovieDetails from "./MovieDetails";

jest.mock("../../features/MovieDetails/useFatchDetails", () => ({
  useFatchDetails: jest.fn(),
}));

describe("useFatchDetails", () => {
  beforeEach(() => {
    useFatchDetails.mockImplementation(() => ({}));
  });

  // it("fetches the movie data for the given id", () => {
  //   // eslint-disable-next-line no-undef
  //   renderWithRouter(
  //     () => <Route path="/test-id" element={<MovieDetails />}></Route>,
  //     "/test-id"
  //   );
  //   expect(useFatchDetails).toHaveBeenCalledWith("test-id");
  // });

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
  describe("with data", () => {
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
