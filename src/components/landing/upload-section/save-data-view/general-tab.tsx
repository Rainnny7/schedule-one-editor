import { ReactElement } from "react";
import DataField from "~/components/landing/upload-section/save-data-view/data-field";
import DataSection from "~/components/landing/upload-section/save-data-view/data-section";
import { GameSaveData } from "~/types/save";

const GeneralTab = ({ data }: { data: GameSaveData }): ReactElement => (
    <div className="space-y-3">
        {/* Organization Info */}
        <DataSection title="Organization Information">
            <DataField label="Organization Name">
                {data.game.OrganisationName}
            </DataField>

            <DataField
                label="Seed"
                details="The seed used to generate random events"
            >
                <span className="font-medium">{data.game.Seed}</span>
            </DataField>
        </DataSection>
    </div>
);
export default GeneralTab;
