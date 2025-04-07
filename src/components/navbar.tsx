"use client";

import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import AnimatedRightChevron from "~/components/animated-right-chevron";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { useGithubStars } from "~/hooks/use-github-stars";
import { cn } from "~/lib/utils";

const Navbar = (): ReactElement => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const { data: stars, isLoading } = useGithubStars(
        "Rainnny7",
        "www-litebans"
    );

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed inset-x-0 top-0 p-4 flex justify-between items-center transition-all transform-gpu z-50",
                hasScrolled &&
                    "bg-black/25 backdrop-blur-sm border-b border-border"
            )}
        >
            {/* Left - Logo */}
            <Link
                className="flex gap-2.5 items-center hover:opacity-75 transition-opacity transform-gpu"
                href="/"
                draggable={false}
            >
                <Image
                    src="/media/logo.png"
                    alt="Schedule I Editor"
                    width={28}
                    height={28}
                />
                <span className="font-bold">Schedule I Editor</span>
            </Link>

            {/* Right - Links */}
            <div className="flex gap-4 items-center">
                {/* GitHub */}
                <Link
                    className="flex gap-1.5 items-center font-medium hover:opacity-75 transition-opacity transform-gpu"
                    href="https://github.com/Rainnny7/schedule-one-editor"
                    target="_blank"
                    draggable={false}
                >
                    <Github className="size-4" />
                    {isLoading ? (
                        <Skeleton className="px-1.5 py-2 rounded-full" />
                    ) : (
                        <span>{stars}</span>
                    )}
                </Link>

                {/* Try It Out */}
                <Link href="/#upload">
                    <Button className="group rounded-full" size="sm">
                        Try It Out
                        <AnimatedRightChevron />
                    </Button>
                </Link>
            </div>
        </nav>
    );
};
export default Navbar;
