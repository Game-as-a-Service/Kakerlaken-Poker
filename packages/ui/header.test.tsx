import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
  it("renders headline", () => {
    render(<Header text="gg" />);
    const headline = screen.getByText(/gg/i);
    expect(headline).toBeInTheDocument();
  });
});
