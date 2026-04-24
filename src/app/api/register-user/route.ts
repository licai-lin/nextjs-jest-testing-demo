import { NextRequest, NextResponse } from "next/server";
import type { InAppUser } from "@/lib/types/in-app-user";

// In-memory store for demo purposes. It resets when the server restarts.
const registeredUserList: InAppUser[] = [];

export async function GET() {
  return NextResponse.json(registeredUserList, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (
      typeof body?.name !== "string" ||
      typeof body?.email !== "string" ||
      typeof body?.password !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid user payload" },
        { status: 400 },
      );
    }

    const newUser: InAppUser = {
      id: Date.now(),
      name: body.name,
      username: body.name,
      email: body.email,
      password: body.password,
    };

    const existingUser = registeredUserList.find(
      (user) => user.email === body.email,
    );

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists", user: existingUser },
        { status: 409 },
      );
    }

    registeredUserList.push(newUser);

    // console.log("in-app-users:", registeredUserList);

    return NextResponse.json(newUser, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 },
    );
  }
}
