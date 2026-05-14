# Beginner Test Guide

This project uses **Jest** for running tests and **React Testing Library** for testing React components.

You do not need to install anything extra if you already ran:

```bash
npm install
```

## Run All Tests

From the project root, run:

```bash
npm test
```

This runs every test file in the project.

## Run One Test File

To run only one file, pass the file path after `--`.

Example:

```bash
npm test -- src/app/Counter.test.tsx
```

The `--` means: "send everything after this to Jest."

You can also run Jest directly:

```bash
npx jest src/app/Counter.test.tsx
```

Both commands are okay. For beginners, `npm test -- path/to/file` is usually easier to remember.

## Run Tests In Watch Mode

Watch mode keeps Jest running and re-runs tests when files change.

Run all tests in watch mode:

```bash
npm test -- --watch
```

Run only one test file in watch mode:

```bash
npm test -- src/app/Counter.test.tsx --watch
```

Press `q` in the terminal to quit watch mode.

## Test File Naming

Common test file names are:

```text
Component.test.tsx
Component.spec.tsx
```

Example from this project:

```text
src/app/Counter.test.tsx
```

The test file usually sits near the file it is testing.

For example:

```text
src/app/Counter.tsx
src/app/Counter.test.tsx
```

## Basic Test Shape

A simple component test usually has this shape:

```tsx
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("shows the initial count", () => {
    render(<Counter initial={0} />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
```

## What Each Part Means

`describe` groups related tests together.

```tsx
describe("Counter", () => {
  // tests go here
});
```

`it` defines one specific thing you expect to work.

```tsx
it("shows the initial count", () => {
  // test steps go here
});
```

`render` puts the React component into a test page.

```tsx
render(<Counter initial={0} />);
```

`screen` finds things on the test page.

```tsx
screen.getByText("0");
```

`expect` checks the result.

```tsx
expect(screen.getByText("0")).toBeInTheDocument();
```

## Testing A Button Click

Use `fireEvent` when you want to simulate a user action.

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("increases the count when the button is clicked", () => {
    render(<Counter initial={0} />);

    const button = screen.getByRole("button", { name: "Increase" });
    fireEvent.click(button);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
```

## Common Queries

Prefer queries that match how a user sees or uses the page.

Find text:

```tsx
screen.getByText("Save");
```

Find a button by its accessible name:

```tsx
screen.getByRole("button", { name: "Save" });
```

Find an input by label:

```tsx
screen.getByLabelText("Email");
```

## Useful Jest Matchers

Check that something exists:

```tsx
expect(screen.getByText("Hello")).toBeInTheDocument();
```

Check exact text:

```tsx
expect(screen.getByText("0")).toHaveTextContent("0");
```

Check that a button is disabled:

```tsx
expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
```

## When A Test Fails

Read the error message from top to bottom.

Common causes:

- The text you are searching for does not exist.
- The button name does not match the real button text.
- The component needs props that were not passed in the test.
- The component changed, but the test still expects the old behavior.

If you are unsure what the test page contains, add:

```tsx
screen.debug();
```

Example:

```tsx
it("shows the initial count", () => {
  render(<Counter initial={0} />);

  screen.debug();

  expect(screen.getByText("0")).toBeInTheDocument();
});
```

Then run the test again. Jest will print the rendered HTML in the terminal.

## Quick Command Cheatsheet

```bash
# Run all tests
npm test

# Run one test file
npm test -- src/app/Counter.test.tsx

# Run one test file in watch mode
npm test -- src/app/Counter.test.tsx --watch

# Run Jest directly
npx jest src/app/Counter.test.tsx
```

