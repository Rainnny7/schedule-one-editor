import type { Metadata, Viewport } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";
import Script from "next/script";
import { ReactNode } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { env } from "~/lib/env";
import { cn } from "~/lib/utils";
import { AppProvider } from "~/providers/app-provider";
import "./styles/globals.css";

export const metadata: Metadata = {
    title: {
        default: "Schedule I Editor",
        template: "%s • Schedule I Editor",
    },
    description:
        "🌿 A game save editor for the Schedule I game - From small-time dope pusher to kingpin - manufacture and distribute a range of drugs throughout the grungy city of Hyland Point. Expand your empire with properties, businesses, employees and more.",
    openGraph: {
        images: [
            {
                url: "/media/logo.png",
                width: 128,
                height: 128,
            },
        ],
    },
    twitter: { card: "summary" },
};
export const viewport: Viewport = { themeColor: "#6DBE41" };

const satoshi: NextFont = localFont({
    src: "./font/Satoshi.ttf",
});

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => (
    <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "antialiased scroll-smooth select-none",
                satoshi.className
            )}
        >
            <Script
                src={`${env.ANALYTICS_HOST}/script.js`}
                data-website-id={env.ANALYTICS_ID}
                defer
            />
            <AppProvider>
                <div className="px-5">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </AppProvider>
        </body>
    </html>
);
export default RootLayout;
