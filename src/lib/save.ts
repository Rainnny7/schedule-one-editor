import JSZip from "jszip";
import { GameSaveData } from "~/types/save";

const SAVE_FILES: Record<string, string> = {
    game: "Game.json",
    metadata: "Metadata.json",
};

export async function processSaveFile(file: File): Promise<GameSaveData> {
    // Validate file type
    if (
        file.type !== "application/x-zip-compressed" ||
        !file.name.endsWith(".zip")
    ) {
        console.debug("Invalid file type:", file.type, file.name);
        throw new Error("Please upload a zip file");
    }
    // Read the zip file
    const zip = new JSZip();
    const zipContents = await zip.loadAsync(file);

    // Ensure all of the save files are present
    const missingFiles = Object.entries(SAVE_FILES)
        .filter(([_, path]) => !zipContents.file(path))
        .map(([_, path]) => path);

    if (missingFiles.length > 0) {
        console.debug("Missing required files:", missingFiles);
        throw new Error("Not a valid Schedule I save");
    }
    // Process all configured save files
    const saveData: Partial<GameSaveData> = {};

    for (const [key, path] of Object.entries(SAVE_FILES)) {
        const fileContent: string | undefined = await zipContents
            .file(path)
            ?.async("text");
        if (fileContent) {
            try {
                saveData[key as keyof GameSaveData] = JSON.parse(fileContent);
            } catch (error) {
                console.error(`Error parsing ${path}:`, error);
                throw new Error(`Failed to parse ${path}`);
            }
        } else {
            console.error(`File content is empty for ${path}`);
        }
    }

    return saveData as GameSaveData;
}
