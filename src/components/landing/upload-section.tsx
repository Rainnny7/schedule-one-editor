"use client";

import { Upload } from "lucide-react";
import { ReactElement } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog";
import { cn } from "~/lib/utils";

const UploadSection = (): ReactElement => {
    return (
        <section
            id="upload"
            className="relative flex h-[40rem] w-full items-center justify-center bg-background"
        >
            {/* Background */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:25px_25px]",
                    "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )}
            />
            <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] bg-background pointer-events-none" />

            {/* Content */}
            <div className="relative z-20">
                <Dropzone />
            </div>
        </section>
    );
};

const Dropzone = (): ReactElement => {
    return (
        <div className="p-5 w-[50rem] h-64 flex flex-col gap-2.5 justify-center items-center bg-card/60 text-sm text-muted-foreground border border-border rounded-lg">
            <Upload className="size-6" />
            <span>Click to upload or drag and drop</span>
            <GetSaveTutorial />
        </div>
    );
};

const GetSaveTutorial = (): ReactElement => (
    <Dialog>
        <DialogTrigger className="px-2 py-1 text-xs font-light rounded-lg bg-muted-foreground/10 hover:opacity-75 transition-opacity transform-gpu cursor-pointer">
            How do I get my Schedule I save?
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>How do I get my Schedule I save?</DialogTitle>
            </DialogHeader>
            Hello World
        </DialogContent>
    </Dialog>
);

export default UploadSection;
