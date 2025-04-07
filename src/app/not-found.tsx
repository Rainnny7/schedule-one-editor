import fs from "fs";
import { Metadata } from "next";
import Image from "next/image";
import path from "path";
import { ReactElement } from "react";

export const metadata: Metadata = {
    title: "Page Not Found",
};

const NotFoundPage = (): ReactElement => (
    <main className="min-h-screen flex justify-center gap-12 items-center">
        <Image
            src={getRandomMugshot()}
            alt="Random Mugshot"
            width={128}
            height={128}
            draggable={false}
        />

        <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-bold">Page not found</h1>
            <p className="text-lg text-muted-foreground">
                The page you were looking for could not be found ):
            </p>
        </div>
    </main>
);

const getMugshots = (): string[] => {
    const mugshotsDir = path.join(process.cwd(), "public/media/mugshots");
    return fs
        .readdirSync(mugshotsDir)
        .filter((file) => file.endsWith(".png"))
        .map((file) => `/media/mugshots/${file}`);
};

const getRandomMugshot = (): string => {
    const mugshots = getMugshots();
    const randomIndex = Math.floor(Math.random() * mugshots.length);
    return mugshots[randomIndex];
};

export default NotFoundPage;
