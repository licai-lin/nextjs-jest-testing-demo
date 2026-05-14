/**
 * @jest-environment node
 */

import { GET } from "./route";

describe("GET /api/todo-status", () => {
  // Create one reusable mock function so each test can control what fetch returns.
  const fetchMock = jest.fn();

  beforeEach(() => {
    // Replace the real fetch with our mock before every test.
    global.fetch = fetchMock;
  });

  afterEach(() => {
    // Clear old mock calls and responses so tests do not affect each other.
    fetchMock.mockReset();
  });

  it("returns todo data from JSONPlaceholder", async () => {
    // This is the fake todo data that our mocked API call will return.
    const todo = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };

    // Tell the mocked fetch call to act like a successful API response.
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => todo,
    });

    // Call the route handler directly, then read the JSON body from its response.
    const response = await GET();
    const body = await response.json();

    // Check that the route fetched the expected URL with the expected cache setting.
    expect(fetchMock).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos/1",
      { next: { revalidate: 60 } },
    );
    // Check that the route returns a success status and wraps the todo data correctly.
    expect(response.status).toBe(200);
    expect(body).toEqual({
      source: "JSONPlaceholder",
      todo,
    });
  });

  it("returns a 503 response when JSONPlaceholder is unavailable", async () => {
    // Tell the mocked fetch call to act like the external API failed.
    fetchMock.mockResolvedValue({
      ok: false,
      status: 500,
    });

    // Call the route handler directly, then read the JSON body from its response.
    const response = await GET();
    const body = await response.json();

    // Check that the route converts the failed fetch into a 503 error response.
    expect(response.status).toBe(503);
    expect(body).toEqual({
      source: "JSONPlaceholder",
      error: "Unavailable",
    });
  });
});
