import { ReactElement } from "react";
import DataField from "~/components/landing/upload-section/save-data-view/data-field";
import DataSection, {
    SubDataSection,
} from "~/components/landing/upload-section/save-data-view/data-section";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";
import { GameSaveData } from "~/types/save";

const GeneralTab = ({ data }: { data: GameSaveData }): ReactElement => (
    <div className="space-y-3">
        {/* Game Information */}
        <DataSection title="Game Information">
            {/* Organization Name */}
            <DataField
                label="Organization Name"
                details="The name of your organization"
            >
                <Input
                    name="orgName"
                    type="text"
                    placeholder="My Cool Organization"
                    defaultValue={data.game.OrganisationName}
                />
            </DataField>

            {/* Seed */}
            <DataField
                label="Seed"
                details="The seed used to generate random events"
            >
                <Input
                    name="seed"
                    type="number"
                    placeholder="1234567890"
                    defaultValue={data.game.Seed}
                />
            </DataField>

            {/* Settings */}
            <SubDataSection title="Settings">
                <DataField
                    label="Console Enabled"
                    details="Whether the debug console is enabled"
                >
                    <Switch
                        name="consoleEnabled"
                        defaultChecked={data.game.Settings.ConsoleEnabled}
                    />
                </DataField>
            </SubDataSection>
        </DataSection>
    </div>
);
export default GeneralTab;
