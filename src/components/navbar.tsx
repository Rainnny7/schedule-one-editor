"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import AnimatedRightChevron from "~/components/animated-right-chevron";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { useGithubStars } from "~/hooks/use-github-stars";
import { cn } from "~/lib/utils";

const Navbar = (): ReactElement => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const { data: stars, isLoading } = useGithubStars(
        "Rainnny7",
        "schedule-one-editor"
    );

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };
        handleScroll(); // Check scroll position on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed inset-x-0 top-0 p-4 flex justify-between items-center transition-all transform-gpu z-50",
                hasScrolled &&
                    "bg-black/15 backdrop-blur-sm border-b border-border"
            )}
        >
            {/* Left - Logo */}
            <motion.div
                className="flex gap-4 items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
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
                    <span className="flex gap-1 items-center font-bold">
                        <span className="hidden xs:block">Schedule I</span>{" "}
                        Editor
                    </span>
                </Link>

                {/* Beta Badge */}
                <Badge className="h-5 text-xs bg-card" variant="outline">
                    Beta
                </Badge>
            </motion.div>

            {/* Right - Links */}
            <div className="flex gap-4 items-center">
                {/* GitHub */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
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
                </motion.div>

                {/* Try It Out */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <Link href="/#upload">
                        <Button className="group rounded-full" size="sm">
                            Try It Out
                            <AnimatedRightChevron />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </nav>
    );
};
export default Navbar;
