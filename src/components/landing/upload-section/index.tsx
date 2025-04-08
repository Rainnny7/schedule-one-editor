"use client";

import { motion } from "framer-motion";
import { ReactElement, useCallback, useState } from "react";
import { toast } from "sonner";
import Dropzone from "~/components/landing/upload-section/dropzone";
import SaveDataView from "~/components/landing/upload-section/save-data-view";
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
            const processedData: GameSaveData = await processSaveFile(file);
            setSaveData(processedData);
            toast.promise(Promise.resolve(processedData), {
                loading: "Uploading your save file...",
                success: "Successfully uploaded save file!",
            });
            console.debug("Save file processed successfully");
        } catch (err) {
            console.debug("Error processing save file:", err);
            setError(
                err instanceof Error ? err.message : "An unknown error occurred"
            );
            toast.error("Error uploading save file");
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
                className="relative w-full flex flex-col gap-8 justify-center items-center z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1 className="text-3xl font-bold">
                    {saveData ? "Viewing" : "Uploading"} your Save
                </h1>

                {saveData ? (
                    <SaveDataView saveData={saveData} onReset={handleReset} />
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
export default UploadSection;
