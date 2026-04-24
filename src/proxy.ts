import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/Counter") {
    const url = request.nextUrl.clone();
    url.pathname = "/counter";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
