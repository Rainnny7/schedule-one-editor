import { ReactElement } from "react";

import { GameSaveData } from "~/types/save";

const SaveDataView = ({
    saveData,
    onReset,
}: {
    saveData: GameSaveData;
    onReset: () => void;
}): ReactElement => {
    console.log({ saveData });
    return (
        <div className="w-full max-w-[75rem] p-5 bg-card/60 border border-border rounded-lg">
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
export default SaveDataView;
