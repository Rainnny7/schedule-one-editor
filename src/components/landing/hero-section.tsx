"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import AnimatedRightChevron from "~/components/animated-right-chevron";
import { Button } from "~/components/ui/button";
import { StarsBackground } from "~/components/ui/stars-background";
import { cn } from "~/lib/utils";

const HeroSection = (): ReactElement => (
    <section className="mx-auto max-w-screen-2xl relative min-h-screen flex gap-24 xl:gap-40 justify-between items-center transition-all transform-gpu">
        {/* Stars Background */}
        <StarsBackground className="opacity-40" />

        {/* Left - Text */}
        <div className="flex flex-col gap-2.5">
            <motion.h1
                className={cn(
                    "text-4xl xl:text-5xl 2xl:text-6xl font-bold",
                    "text-clip text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/65"
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Schedule I Save Editor
            </motion.h1>
            <motion.p
                className={cn(
                    "max-w-xl text-lg 2xl:text-2xl",
                    "text-clip text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/90 to-muted-foreground/75"
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Upload, view, and modify your game save files with ease with our
                simple to use, open-source editor.
            </motion.p>

            {/* Buttons */}
            <motion.div
                className="mt-4 flex gap-3 items-center relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {/* Radial gradient background */}
                <div className="absolute -left-28 -inset-y-40 w-[32rem] bg-radial-[at_center] from-muted-foreground/10 via-transparent to-transparent blur-md rounded-full opacity-50 -z-10" />

                {/* Upload Save */}
                <Link href="/#upload" draggable={false}>
                    <Button
                        className="group rounded-lg border border-green-800"
                        size="lg"
                    >
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
                    <Button className="rounded-lg" size="lg" variant="outline">
                        <Github className="size-4" />
                        View Source
                    </Button>
                </Link>
            </motion.div>
        </div>

        {/* Right - Image */}
        <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
        >
            {/* Radial gradient background */}
            <div className="absolute -left-64 -bottom-64 w-[40rem] h-[40rem] bg-radial-[at_center] from-muted-foreground/10 via-transparent to-transparent blur-md rounded-full opacity-50 -z-10" />

            <Image
                className="border border-border rounded-2xl mask-r-from-50% mask-r-to-85%"
                src="/media/hero-section.webp"
                alt="Hero Section"
                width={512}
                height={290}
                draggable={false}
            />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
            className="absolute inset-x-0 bottom-24 flex justify-center text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Link
                className="w-fit flex flex-col gap-4 justify-center items-center hover:opacity-75 transition-opacity transform-gpu"
                href="/#upload"
                draggable={false}
            >
                <Mouse className="size-4" />
                <ArrowDown className="size-4 animate-bounce" />
            </Link>
        </motion.div>
    </section>
);
export default HeroSection;
