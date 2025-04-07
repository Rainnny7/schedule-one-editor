import type { Metadata, Viewport } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";
import { ThemeProvider } from "~/components/theme-provider";
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
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${satoshi.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};
export default RootLayout;
