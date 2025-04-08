import { Upload } from "lucide-react";
import {
    ChangeEvent,
    DragEvent,
    ReactElement,
    useCallback,
    useState,
} from "react";
import KeyboardShortcut from "~/components/keyboard-shortcut";
import { Button } from "~/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

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
                "group p-5 w-full max-w-[50rem] h-64 flex flex-col gap-2.5 justify-center items-center bg-card/60 text-sm text-muted-foreground border border-border rounded-lg transition-all cursor-pointer",
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

const GetSaveTutorial = (): ReactElement => (
    <Dialog>
        <DialogTrigger className="px-2 py-1 text-xs font-light rounded-lg bg-muted-foreground/10 hover:opacity-75 transition-opacity transform-gpu cursor-pointer">
            How do I get my Schedule I save?
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>How do I get my Schedule I save?</DialogTitle>
                <DialogDescription>
                    Below is a guide on how to obtain your save data from your
                    game
                </DialogDescription>
            </DialogHeader>
            <Separator />

            {/* Steps */}
            <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                    1. Open the run dialog with{" "}
                    <KeyboardShortcut shortcut="R" /> and navigate to{" "}
                    <code className="text-foreground/80">%appdata%</code>
                </li>
                <li>
                    2. Navigate back a directory to{" "}
                    <code className="text-foreground/80">AppData</code> and then
                    open{" "}
                    <code className="text-foreground/80">
                        LocalLow/TVGS/Schedule
                        I/Saves/[steamId]/SaveGame_[number]
                    </code>
                </li>
                <li>
                    3. Create a ZIP file with the contents of the folder and
                    upload it below
                </li>
            </ul>

            <DialogClose asChild>
                <Button className="mt-1" size="sm" variant="outline">
                    Got It!
                </Button>
            </DialogClose>
        </DialogContent>
    </Dialog>
);

export default Dropzone;
