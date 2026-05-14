# Jest Hooks Guide

`beforeEach` is a Jest helper that runs before every `it` test in the same scope.

Use it when every test needs the same setup.

Good examples:

- Resetting mock functions
- Clearing test data
- Creating the same starting values
- Rendering the same component for every test

Avoid `beforeEach` when each test needs different setup. In that case, keep the setup inside each `it` test so the test is easier to read.

## Run Flow

Jest reads the test file first, then runs each test.

Flow:

1. Jest runs the `describe` callback.
2. Jest reaches each `it(...)` and saves the test callback for later.
3. When Jest starts one test, it runs `beforeEach` first.
4. Then Jest runs that test's `it` callback.
5. For the next test, Jest runs `beforeEach` again, then that next `it` callback.

## Simple Example

```ts
let count = 0;

describe("counter", () => {
  console.log("1. describe callback runs");

  beforeEach(() => {
    console.log("3. beforeEach runs before this test");
    count = 0;
  });

  it("starts at zero", () => {
    console.log("4. first it callback runs");
    expect(count).toBe(0);
  });

  it("can increase", () => {
    console.log("4. second it callback runs");
    count = count + 1;
    expect(count).toBe(1);
  });
});
```

## What Happens

When Jest loads the file:

```txt
1. describe callback runs
```

When Jest runs the first test:

```txt
3. beforeEach runs before this test
4. first it callback runs
```

When Jest runs the second test:

```txt
3. beforeEach runs before this test
4. second it callback runs
```

The important idea: `beforeEach` runs once before each test, not once for the whole file.

## Scope

`beforeEach` and `afterEach` only apply to tests inside the `describe` block where they are written.

They do not run for a separate sibling `describe` block:

```ts
describe("GET /api/todo-status", () => {
  beforeEach(() => {
    // Runs before tests in this describe only.
  });

  it("returns todo data", () => {
    // beforeEach runs before this test.
  });
});

describe("GET /api/users", () => {
  it("returns users", () => {
    // The todo-status beforeEach does not run here.
  });
});
```

If a `describe` is nested inside another `describe`, the outer hooks still apply to the nested tests:

```ts
describe("GET /api/todo-status", () => {
  beforeEach(() => {
    // Runs before both tests below.
  });

  it("returns todo data", () => {
    // beforeEach runs before this test.
  });

  describe("error cases", () => {
    it("returns 503 when the API fails", () => {
      // The outer beforeEach also runs before this nested test.
    });
  });
});
```

Simple rule: hooks affect tests inside their current `describe`, including nested describes, but not sibling describes.
