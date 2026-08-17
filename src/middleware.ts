import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (host?.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice(4);
    return NextResponse.redirect(url, 308);
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    const user = process.env.ADMIN_USER;
    const pass = process.env.ADMIN_PASSWORD;

    if (!user || !pass) {
      return new NextResponse("Admin access is not configured.", { status: 503 });
    }

    const auth = request.headers.get("authorization");
    const expected = "Basic " + btoa(`${user}:${pass}`);

    if (auth !== expected) {
      return new NextResponse("Authentication required.", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="The Bridge Consulting and Advisory Limited Admin"' },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
