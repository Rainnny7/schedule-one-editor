import { FileDown, FileUp } from "lucide-react";
import { ReactElement, useCallback, useState } from "react";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { GameSaveData } from "~/types/save";
import GeneralTab from "./general-tab";

type DataTab = {
    label: string;
    value: string;
    component: (
        data: GameSaveData,
        onFieldChange: (field: string, value: any) => void
    ) => ReactElement;
};

const tabs: DataTab[] = [
    {
        label: "General",
        value: "general",
        component: (data, onFieldChange) => (
            <GeneralTab data={data} onFieldChange={onFieldChange} />
        ),
    },
];

const SaveDataView = ({
    saveData,
    onReset,
}: {
    saveData: GameSaveData;
    onReset: () => void;
}): ReactElement => {
    const [changedFields, setChangedFields] = useState<Record<string, any>>({});
    const [hasChanges, setHasChanges] = useState(false);

    const getOriginalValue = useCallback(
        (field: string) => {
            const fieldPath: string[] = field.split(".");
            let current: any = saveData;
            for (const key of fieldPath) {
                current = current[key];
            }
            return current;
        },
        [saveData]
    );

    const handleFieldChange = useCallback(
        (field: string, value: any) => {
            setChangedFields((prev: Record<string, any>) => {
                const originalValue = getOriginalValue(field);
                const newChanges: Record<string, any> = { ...prev };

                // If the value matches the original, remove it from changes
                if (value === originalValue) {
                    delete newChanges[field];
                } else {
                    newChanges[field] = value;
                }
                setHasChanges(Object.keys(newChanges).length > 0);
                return newChanges;
            });
        },
        [getOriginalValue]
    );

    const handleSave = useCallback(() => {
        // Create a new save data object with the changes
        const newSaveData = { ...saveData };
        Object.entries(changedFields).forEach(([field, value]) => {
            const fieldPath: string[] = field.split(".");
            let current: any = newSaveData;
            for (let i = 0; i < fieldPath.length - 1; i++) {
                current = current[fieldPath[i]];
            }
            current[fieldPath[fieldPath.length - 1]] = value;
        });

        // TODO: save data

        // Reset changes after saving
        setChangedFields({});
        setHasChanges(false);
    }, [saveData, changedFields]);

    return (
        <div className="w-full max-w-[75rem] p-5 bg-card/60 border border-border rounded-lg">
            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-between sm:items-center mb-4">
                <h2 className="text-xl font-semibold text-green-500">
                    Save File Uploaded!
                </h2>

                <div className="flex gap-2">
                    {hasChanges && (
                        <Button
                            className="hover:opacity-75 transition-opacity transform-gpu"
                            variant="default"
                            size="xs"
                            onClick={handleSave}
                        >
                            <FileDown className="size-3.5" />
                            Save & Download
                        </Button>
                    )}
                    <Button
                        className="hover:opacity-75 transition-opacity transform-gpu"
                        variant="destructive"
                        size="xs"
                        onClick={onReset}
                    >
                        <FileUp className="size-3.5" />
                        Upload Another Save
                    </Button>
                </div>
            </div>

            {/* Data Tabs */}
            <form onSubmit={(e) => e.preventDefault()}>
                <Tabs defaultValue={tabs[0].value}>
                    <TabsList>
                        {tabs.map((tab) => (
                            <TabsTrigger key={tab.value} value={tab.value}>
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {tabs.map((tab) => (
                        <TabsContent
                            key={tab.value}
                            className="mt-1"
                            value={tab.value}
                        >
                            {tab.component(saveData, handleFieldChange)}
                        </TabsContent>
                    ))}
                </Tabs>
            </form>
        </div>
    );
};

export default SaveDataView;
