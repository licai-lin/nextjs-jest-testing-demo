import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

describe(UserList, () => {
  it("renders users in a table", () => {
    render(
      <UserList
        users={[
          { name: "John", email: "john@gmail.com" },
          { name: "Bob", email: "bob@gmail.com" },
        ]}
      />,
    );

    const table = screen.getByRole("table");

    expect(
      within(table).getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument();
    expect(
      within(table).getByRole("columnheader", { name: "Email" }),
    ).toBeInTheDocument();
    expect(within(table).getByRole("cell", { name: "John" })).toBeInTheDocument();
    expect(
      within(table).getByRole("cell", { name: "john@gmail.com" }),
    ).toBeInTheDocument();
    expect(within(table).getByRole("cell", { name: "Bob" })).toBeInTheDocument();
    expect(
      within(table).getByRole("cell", { name: "bob@gmail.com" }),
    ).toBeInTheDocument();
  });
});
