# Test Guide Sample 1: Finding A Table Row

This sample explains this test assertion:

```tsx
expect(
  within(table).getByRole("row", { name: "Taylor taylor@gmail.com" }),
).toBeInTheDocument();
```

In plain English, this means:

```text
Inside the table, find a table row whose accessible name is
"Taylor taylor@gmail.com", and expect that row to exist on the page.
```

## The Full Idea

This line checks that the table contains a row for the new user Taylor.

It does not only check that the word `Taylor` exists somewhere.

It does not only check that the email `taylor@gmail.com` exists somewhere.

It checks that both pieces of text appear together in the same table row.

That matters because a user record usually belongs together as one row:

```text
Taylor | taylor@gmail.com
```

## Breaking It Down

### `within(table)`

```tsx
within(table)
```

This tells React Testing Library:

```text
Only search inside the table element.
```

Without `within(table)`, the test would search the whole page.

Using `within(table)` makes the test more specific. We are not just checking
whether Taylor appears anywhere on the page. We are checking whether Taylor
appears inside the users table.

### `getByRole("row")`

```tsx
getByRole("row")
```

This looks for a table row.

In HTML, a table row is usually written with a `<tr>` element:

```html
<tr>
  <td>Taylor</td>
  <td>taylor@gmail.com</td>
</tr>
```

React Testing Library understands that this `<tr>` has the role `"row"`.

So this part means:

```text
Find a row in the table.
```

### `{ name: "Taylor taylor@gmail.com" }`

```tsx
{ name: "Taylor taylor@gmail.com" }
```

This tells React Testing Library which row to find.

The row has two cells:

```html
<td>Taylor</td>
<td>taylor@gmail.com</td>
```

When React Testing Library reads the row, it combines the readable text from the
cells. So the row can be found by this name:

```text
Taylor taylor@gmail.com
```

That is why this works:

```tsx
within(table).getByRole("row", { name: "Taylor taylor@gmail.com" });
```

It means:

```text
Inside the table, find the row that contains Taylor and taylor@gmail.com.
```

### `expect(...).toBeInTheDocument()`

```tsx
expect(...).toBeInTheDocument();
```

This is the final check.

It means:

```text
I expect the thing we found to exist on the rendered page.
```

If the row exists, the test passes.

If the row does not exist, the test fails.

## Why This Is Better Than Checking Two Cells Separately

You could write this:

```tsx
expect(within(table).getByRole("cell", { name: "Taylor" })).toBeInTheDocument();
expect(
  within(table).getByRole("cell", { name: "taylor@gmail.com" }),
).toBeInTheDocument();
```

Those checks prove that both pieces of text exist somewhere in the table.

But they do not prove that the name and email are in the same row.

This version is stronger:

```tsx
expect(
  within(table).getByRole("row", { name: "Taylor taylor@gmail.com" }),
).toBeInTheDocument();
```

It proves that `Taylor` and `taylor@gmail.com` appear together as one user
record.

## Summary

Read the assertion like this:

```text
Look inside the table.
Find the row for Taylor and taylor@gmail.com.
Make sure that row is really on the page.
```

That is why this assertion is useful for testing a users table after submitting
a form.
