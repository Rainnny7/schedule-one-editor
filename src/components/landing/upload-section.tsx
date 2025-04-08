"use client";

import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import {
    ChangeEvent,
    DragEvent,
    ReactElement,
    useCallback,
    useState,
} from "react";
import { Button } from "~/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog";
import { processSaveFile } from "~/lib/save";
import { cn } from "~/lib/utils";
import { GameSaveData } from "~/types/save";

const UploadSection = (): ReactElement => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [saveData, setSaveData] = useState<GameSaveData | undefined>(
        undefined
    );

    const handleUpload = async (file: File): Promise<void> => {
        setIsLoading(true);
        setError(undefined);
        console.debug("Uploading save file...", file);
        try {
            setSaveData(await processSaveFile(file));
            console.debug("Save file processed successfully");
        } catch (err) {
            console.debug("Error processing save file:", err);
            setError(
                err instanceof Error ? err.message : "An unknown error occurred"
            );
            setSaveData(undefined);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileChange = useCallback((files: FileList | null) => {
        if (files && files.length > 0) {
            handleUpload(files[0]);
        }
    }, []);

    const handleReset = useCallback(() => {
        setSaveData(undefined);
        setError(undefined);
    }, []);

    return (
        <motion.section
            id="upload"
            className="relative flex h-[40rem] w-full items-center justify-center bg-background"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
            <motion.div
                className="w-full max-w-[50rem] relative flex flex-col gap-8 justify-center items-center z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1 className="text-3xl font-bold">
                    {saveData ? "Viewing" : "Uploading"} your Save
                </h1>

                {saveData ? (
                    <SaveDataDisplay
                        saveData={saveData}
                        onReset={handleReset}
                    />
                ) : (
                    <Dropzone
                        isLoading={isLoading}
                        error={error}
                        onFileChange={handleFileChange}
                        onReset={handleReset}
                    />
                )}
            </motion.div>
        </motion.section>
    );
};

const Dropzone = ({
    isLoading,
    error,
    onFileChange,
    onReset,
}: {
    isLoading: boolean;
    error: string | undefined;
    onFileChange: (files: FileList | null) => void;
    onReset: () => void;
}): ReactElement => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = useCallback((event: DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback(
        (event: DragEvent<HTMLLabelElement>) => {
            event.preventDefault();
            event.stopPropagation();
            setIsDragging(false);
        },
        []
    );

    const handleDrop = useCallback(
        (event: DragEvent<HTMLLabelElement>) => {
            event.preventDefault();
            event.stopPropagation();
            setIsDragging(false);
            if (
                event.dataTransfer?.files &&
                event.dataTransfer.files.length > 0
            ) {
                onFileChange(event.dataTransfer.files);
            }
        },
        [onFileChange]
    );

    return (
        <label
            htmlFor="file-upload"
            className={cn(
                "group p-5 w-full h-64 flex flex-col gap-2.5 justify-center items-center bg-card/60 text-sm text-muted-foreground border border-border rounded-lg transition-all cursor-pointer",
                isDragging && "border-primary bg-primary/10 opacity-70",
                isLoading && "opacity-70 cursor-wait"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {isLoading ? (
                <div className="flex flex-col gap-2 items-center">
                    <div className="size-8 border-b-2 border-primary animate-spin rounded-full" />
                    <span>Processing your save file...</span>
                </div>
            ) : error ? (
                <div className="flex flex-col gap-3.5 items-center">
                    <p className="text-destructive font-medium">
                        Error: {error}
                    </p>
                    <Button size="sm" variant="outline" onClick={onReset}>
                        Try Again
                    </Button>
                </div>
            ) : (
                <>
                    <Upload className="size-6 group-hover:-translate-y-0.5 duration-300 transition-transform transform-gpu" />
                    <span>
                        {isDragging
                            ? "Drop your save file here"
                            : "Click to upload or drag and drop"}
                    </span>
                    <GetSaveTutorial />
                    <input
                        id="file-upload"
                        className="hidden"
                        type="file"
                        accept=".zip"
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onFileChange(event.target.files)
                        }
                    />
                </>
            )}
        </label>
    );
};

const SaveDataDisplay = ({
    saveData,
    onReset,
}: {
    saveData: GameSaveData;
    onReset: () => void;
}): ReactElement => {
    console.log({ saveData });
    return (
        <div className="w-full p-5 bg-card/60 border border-border rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-green-500">
                    Save File Uploaded!
                </h2>
                <button
                    className="px-3 py-1 text-xs bg-destructive/10 text-destructive rounded-md hover:bg-destructive/20 transition-colors"
                    onClick={onReset}
                >
                    Upload Another Save
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4">stuff</div>
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
