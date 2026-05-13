import { fireEvent, render, screen } from "@testing-library/react";
import UserForm from "./UserForm";

describe(UserForm, () => {
  it("calls onUserAdd with the submitted user", () => {
    const onUserAdd = jest.fn();

    render(<UserForm onUserAdd={onUserAdd} />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Taylor" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "taylor@gmail.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(onUserAdd).toHaveBeenCalledWith({
      name: "Taylor",
      email: "taylor@gmail.com",
    });
  });
});
