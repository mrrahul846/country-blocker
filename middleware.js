import { NextResponse } from "next/server";

export async function middleware(req) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "0.0.0.0";

  const response = await fetch(https://ipqualityscore.com/api/json/ip/ZLCoeNURSQSQRQ7FsYhRVSXr73ul54nR/${ip});
  const data = await response.json();

  const country = data.country_code;
  const isVPN = data.vpn;

  if (country === "SI" || isVPN === true) {
    return new Response("Access Denied", { status: 403 });
  }

  return NextResponse.next();
}
