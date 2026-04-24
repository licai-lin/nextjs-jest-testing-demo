import CounterJs from "./CounterJs";
import { fireEvent, render, screen } from "@testing-library/react";

// `describe` groups related tests for one unit (here, the Counter component).
// This keeps output readable when your suite grows.
describe(CounterJs, () => {
  // `it` defines one behavior we expect from the component.
  // A good test name describes behavior, not implementation details.
  it("displays the initial count", () => {
    // Arrange + Act:
    // Render the component with a known starting state (`initialCount={0}`).
    // We use props to control test input so the test is deterministic.
    render(<CounterJs initialCount={0} />);

    // Assert:
    // Query a specific DOM node using `data-testid` when we want an exact target.
    // This is useful if text might appear in multiple places.
    expect(screen.getByTestId("my-count")).toHaveTextContent("0");
  });

  it("increments the count when the Increase button is clicked", () => {
    // Arrange:
    // Render with a predictable starting value so we can verify one click = +1.
    const { getByTestId, getByRole } = render(<CounterJs initialCount={0} />);

    // Act:
    // Locate the semantic button by accessible name and simulate a user click.
    const incrementButton = getByRole("button", { name: "Increase" });
    fireEvent.click(incrementButton);

    // Assert:
    // The displayed count should update from 0 to 1 after one increment click.
    expect(getByTestId("my-count")).toHaveTextContent("1");
  });
});
