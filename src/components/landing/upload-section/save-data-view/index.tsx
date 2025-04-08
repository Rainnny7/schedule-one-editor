import { ReactElement } from "react";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { GameSaveData } from "~/types/save";
import GeneralTab from "./general-tab";

type DataTab = {
    label: string;
    value: string;
    component: (data: GameSaveData) => ReactElement;
};

const tabs: DataTab[] = [
    {
        label: "General",
        value: "general",
        component: (data) => <GeneralTab data={data} />,
    },
];

const SaveDataView = ({
    saveData,
    onReset,
}: {
    saveData: GameSaveData;
    onReset: () => void;
}): ReactElement => (
    <div className="w-full max-w-[75rem] p-5 bg-card/60 border border-border rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-green-500">
                Save File Uploaded!
            </h2>

            {/* Reset */}
            <Button
                className="hover:opacity-75 transition-opacity transform-gpu"
                variant="destructive"
                size="xs"
                onClick={onReset}
            >
                Upload Another Save
            </Button>
        </div>

        {/* Data Tabs */}
        <Tabs defaultValue={tabs[0].value}>
            <TabsList>
                {tabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab) => (
                <TabsContent key={tab.value} className="mt-1" value={tab.value}>
                    {tab.component(saveData)}
                </TabsContent>
            ))}
        </Tabs>
    </div>
);
export default SaveDataView;
