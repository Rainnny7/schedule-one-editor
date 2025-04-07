import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import "./styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
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
