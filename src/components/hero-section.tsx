import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import AnimatedRightChevron from "~/components/animated-right-chevron";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const HeroSection = (): ReactElement => {
    return (
        <div className="min-h-screen flex gap-24 xl:gap-40 justify-center items-center transition-all transform-gpu">
            {/* Left - Text */}
            <div className="flex flex-col gap-2.5">
                <h1
                    className={cn(
                        "text-4xl xl:text-5xl 2xl:text-6xl font-bold transition-all transform-gpu",
                        "text-clip text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/65"
                    )}
                >
                    Schedule I Save Editor
                </h1>
                <p
                    className={cn(
                        "max-w-xl text-lg 2xl:text-2xl transition-all transform-gpu",
                        "text-clip text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/90 to-muted-foreground/75"
                    )}
                >
                    Upload, view, and modify your game save files with ease with
                    our simple to use, open-source editor.
                </p>

                {/* Buttons */}
                <div className="mt-3 flex gap-3 items-center">
                    {/* Upload Save */}
                    <Link href="/#upload" draggable={false}>
                        <Button className="group rounded-lg" size="lg">
                            Upload Save
                            <AnimatedRightChevron />
                        </Button>
                    </Link>

                    {/* GitHub */}
                    <Link
                        href="https://github.com/Rainnny7/schedule-one-editor"
                        target="_blank"
                        draggable={false}
                    >
                        <Button
                            className="rounded-lg"
                            size="lg"
                            variant="outline"
                        >
                            <Github className="size-4" />
                            View Source
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Right - Image */}
            <Image
                className="hidden lg:block border border-border rounded-2xl mask-r-from-50% mask-r-to-90%"
                src="/media/hero-section.webp"
                alt="Hero Section"
                width={512}
                height={290}
                draggable={false}
            />
        </div>
    );
};
export default HeroSection;
