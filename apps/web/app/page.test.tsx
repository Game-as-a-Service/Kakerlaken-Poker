import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Page", () => {
  it("renders headline", () => {
    render(<Page />);
    const headline = screen.getByText(/My Test/i);
    expect(headline).toBeInTheDocument();
  });
});
