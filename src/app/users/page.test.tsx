import { fireEvent, render, screen, within } from "@testing-library/react";
import UsersPage from "./page";

describe(UsersPage, () => {
  it("adds a submitted user to the table and resets the form", () => {
    render(<UsersPage />);

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");

    fireEvent.change(nameInput, {
      target: { value: "Taylor" },
    });
    fireEvent.change(emailInput, {
      target: { value: "taylor@gmail.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    const table = screen.getByRole("table");

    expect(
      within(table).getByRole("row", { name: "Taylor taylor@gmail.com" }),
    ).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });
});
