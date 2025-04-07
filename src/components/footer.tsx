import Link from "next/link";
import { ReactElement } from "react";

const Footer = (): ReactElement => (
    <footer className="fixed inset-x-0 bottom-3.5 w-fit mx-auto px-3 py-1.5 text-sm font-light bg-black/25 backdrop-blur-sm border border-border rounded-full">
        Made with <span className="animate-pulse">💚</span> by{" "}
        <Link
            className="text-muted-foreground hover:opacity-75 transition-opacity transform-gpu"
            href="https://github.com/Rainnny7"
            target="_blank"
        >
            Rainnny7
        </Link>
    </footer>
);
export default Footer;
