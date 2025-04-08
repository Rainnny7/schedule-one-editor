"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement } from "react";

const Footer = (): ReactElement => (
    <motion.footer
        className="fixed inset-x-0 bottom-4 w-fit mx-auto px-3 py-1.5 text-sm font-light bg-black/25 backdrop-blur-sm border border-border rounded-full z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
    >
        Made with <span className="animate-pulse">💚</span> by{" "}
        <Link
            className="text-muted-foreground hover:opacity-75 transition-opacity transform-gpu"
            href="https://github.com/Rainnny7"
            target="_blank"
        >
            Rainnny
        </Link>
    </motion.footer>
);
export default Footer;
