export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`JSONPlaceholder responded with ${response.status}`);
    }

    const todo = await response.json();

    return Response.json(
      {
        source: "JSONPlaceholder",
        todo,
      },
      { status: 200 },
    );
  } catch {
    return Response.json(
      {
        source: "JSONPlaceholder",
        error: "Unavailable",
      },
      { status: 503 },
    );
  }
}
