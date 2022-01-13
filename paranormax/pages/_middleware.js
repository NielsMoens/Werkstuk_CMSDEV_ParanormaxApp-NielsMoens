import {NextResponse} from "next/server";

export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/login') {
        return NextResponse.redirect('/')
    }
    return NextResponse.next()
}