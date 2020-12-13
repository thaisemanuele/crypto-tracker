import { render, screen } from "@testing-library/react";
import MainPage from "../pages/index";

describe("Main Page", () => {
  it("renders without error", () => {
    render(<MainPage />);
    expect(
      screen.getByRole("heading", { name: "Now you can track all your cryptos here!"})
    ).toBeInTheDocument;
  })
})