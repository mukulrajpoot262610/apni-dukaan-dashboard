import { NextResponse } from "next/server";

export async function middleware(req) {
    const { dukaanAccessCookie } = req.cookies

    const url = req.url

    if (url.includes('/account')) {
        if (!dukaanAccessCookie) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}login`)
        }
    }

    if (dukaanAccessCookie) {
        if (url.includes('/login')) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}account`)
        }
    }

    return NextResponse.next()
}