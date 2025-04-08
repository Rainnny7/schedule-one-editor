import { ChangeEvent, ReactElement } from "react";
import DataField from "~/components/landing/upload-section/save-data-view/data-field";
import DataSection, {
    SubDataSection,
} from "~/components/landing/upload-section/save-data-view/data-section";
import CalendarPopover from "~/components/ui/calendar-popover";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";
import { GameSaveData } from "~/types/save";

const GeneralTab = ({
    data,
    onFieldChange,
}: {
    data: GameSaveData;
    onFieldChange: (field: string, value: any) => void;
}): ReactElement => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;
        onFieldChange(name, type === "number" ? Number(value) : value);
    };

    const handleSwitchChange = (name: string, checked: boolean) => {
        onFieldChange(name, checked);
    };

    return (
        <div className="space-y-3">
            {/* Game Information */}
            <DataSection title="Game Information">
                {/* Organization Name */}
                <DataField
                    label="Organization Name"
                    details="The name of your organization"
                >
                    <Input
                        name="game.OrganisationName"
                        type="text"
                        placeholder="My Cool Organization"
                        defaultValue={data.game.OrganisationName}
                        onChange={handleInputChange}
                    />
                </DataField>

                {/* Seed */}
                <DataField
                    label="Seed"
                    details="The seed used to generate random events"
                >
                    <Input
                        name="game.Seed"
                        type="number"
                        placeholder="1234567890"
                        defaultValue={data.game.Seed}
                        onChange={handleInputChange}
                    />
                </DataField>

                {/* Settings */}
                <SubDataSection title="Settings">
                    <DataField
                        label="Console Enabled"
                        details="Whether the debug console is enabled"
                    >
                        <Switch
                            defaultChecked={data.game.Settings.ConsoleEnabled}
                            onCheckedChange={(checked: boolean) =>
                                handleSwitchChange(
                                    "game.Settings.ConsoleEnabled",
                                    checked
                                )
                            }
                        />
                    </DataField>
                </SubDataSection>
            </DataSection>

            {/* Metadata */}
            <DataSection title="Save Metadata">
                {/* Play Tutorial */}
                <DataField
                    label="Play Tutorial"
                    details="Whether the tutorial should be played upon loading the save"
                >
                    <Switch
                        defaultChecked={data.metadata.PlayTutorial}
                        onCheckedChange={(checked: boolean) =>
                            handleSwitchChange(
                                "metadata.PlayTutorial",
                                checked
                            )
                        }
                    />
                </DataField>

                {/* Last Save Version */}
                <DataField
                    label="Last Save Version"
                    details="The version of the game that last saved the save"
                >
                    <Input
                        name="metadata.LastSaveVersion"
                        type="text"
                        defaultValue={data.metadata.LastSaveVersion}
                        onChange={handleInputChange}
                    />
                </DataField>

                {/* Creation Version */}
                <DataField
                    label="Creation Version"
                    details="The version of the game that created the save"
                >
                    <Input
                        name="metadata.CreationVersion"
                        type="text"
                        defaultValue={data.metadata.CreationVersion}
                        onChange={handleInputChange}
                    />
                </DataField>

                {/* Last Played Date    */}
                <DataField
                    label="Last Played Date"
                    details="The date and time when the save was last played"
                >
                    <CalendarPopover
                        date={data.metadata.LastPlayedDate}
                        onDateChange={(date: Date | undefined) =>
                            date &&
                            onFieldChange("metadata.LastPlayedDate", date)
                        }
                    />
                </DataField>

                {/* Creation Date */}
                <DataField
                    label="Creation Date"
                    details="The date and time when the save was created"
                >
                    <CalendarPopover
                        date={data.metadata.CreationDate}
                        onDateChange={(date: Date | undefined) =>
                            date && onFieldChange("metadata.CreationDate", date)
                        }
                    />
                </DataField>
            </DataSection>
        </div>
    );
};

export default GeneralTab;
