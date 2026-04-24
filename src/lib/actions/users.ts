"use server";

import { headers } from "next/headers";
import type { RegisterState } from "./register-state";
import type { InAppUser } from "../types/in-app-user";

export async function registerUser(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  // Read raw values submitted from the register form.
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  // Guard against malformed form submissions before calling the API.
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return {
      success: false,
      user: null,
      message: "Invalid form submission.",
      users: prevState.users,
    };
  }

  // Build an absolute API URL using request headers (works in different hosts).
  const requestHeaders = await headers();

  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  // Respect reverse-proxy protocol headers in production deployments.
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";

  console.log("host", host);

  // Fall back to localhost when host headers are unavailable in local/dev.
  const baseUrl = host ? `${protocol}://${host}` : "http://localhost:3000";

  try {
    // Create the user through our Route Handler.
    const response = await fetch(`${baseUrl}/api/register-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: name,
        email: email,
        password: password,
      }),
    });

    // Surface API-level failures back to the form UI.
    if (!response.ok) {
      const errorPayload = (await response.json().catch(() => null)) as
        | { message?: string; error?: string }
        | null;

      if (response.status === 409) {
        return {
          success: false,
          user: null,
          message:
            errorPayload?.error ??
            errorPayload?.message ??
            "User with this email already exists",
          users: prevState.users,
        };
      }

      const errorMessage =
        errorPayload?.message ??
        errorPayload?.error ??
        "Failed to create account. Please try again.";

      return {
        success: false,
        user: null,
        message: errorMessage,
        users: prevState.users,
      };
    }

    // Re-fetch users after a successful create so UI shows fresh server data.
    const usersResponse = await fetch(`${baseUrl}/api/register-user`, {
      method: "GET",
      cache: "no-store",
    });

    // Fall back to previous list if the follow-up fetch fails.
    const users = usersResponse.ok
      ? ((await usersResponse.json()) as InAppUser[])
      : prevState.users;

    // Keep newest users at the top of the register list.
    const sortedUsers = [...users].sort((a, b) => b.id - a.id);

    // Return success state for UI feedback.
    return {
      success: true,
      user: name,
      message: "Account created successfully.",
      users: sortedUsers,
    };
  } catch {
    // Surface network/runtime failures (e.g. server unavailable).
    return {
      success: false,
      user: null,
      message: "Unable to reach the server. Please try again.",
      users: prevState.users,
    };
  }
}
