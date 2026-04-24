import Counter from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";

describe(Counter, () => {
  it("displays the initial count", () => {
    render(<Counter initial={0} />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increments the count when the Increase button is clicked", () => {
    render(<Counter initial={0} />);

    const incrementButton = screen.getByRole("button", { name: "Increase" });
    fireEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
