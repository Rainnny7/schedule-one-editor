"use client";

import { ReactElement } from "react";
import { cn } from "~/lib/utils";

const UploadSection = (): ReactElement => {
    return (
        <section
            id="upload"
            className="relative flex h-[50rem] w-full items-center justify-center bg-background"
        >
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:25px_25px]",
                    "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )}
            />
            <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] bg-background pointer-events-none" />

            {/* Content */}
            <div className="relative z-20">Upload</div>
        </section>
    );
};
export default UploadSection;
