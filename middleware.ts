import type { NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";

export function middleware(req: NextRequest) {
    const { ua } = userAgent(req);

    if (req.nextUrl.pathname === "/install") {
        if (/iPhone|iPad|iPod/i.test(ua)) {
            return NextResponse.redirect(
                "https://apps.apple.com/us/app/drive-insight-master-the-ride/id6740708847",
            );
        }
        // Once the play store app is live add an else if statement to route to play store
    }

    if (req.nextUrl.pathname === "/beta") {
        return NextResponse.redirect("https://forms.gle/yd81yu1HZtfyo63t6");
    }
}

export const config = {
    matcher: ["/install", "/beta"],
};
