import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Drive Insight",
    description: "Smart Insights for Smarter Driving",
    openGraph: {
        title: "Drive Insight",
        description: "Smart Insights for Smarter Driving",
        url: "https://mydriveinsight.com/",
        siteName: "Drive Insight",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans`}>
                {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div> */}
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
