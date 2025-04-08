import { Info } from "lucide-react";
import { ReactNode } from "react";
import SimpleTooltip from "~/components/simple-tooltip";

const DataField = ({
    label,
    details,
    children,
}: {
    label: string;
    details?: string;
    children: ReactNode;
}) => (
    <div className="flex flex-col sm:flex-row justify-between sm:gap-10 sm:items-center">
        {/* Label */}
        <div className="flex gap-1.5 items-center">
            <span className="text-muted-foreground">{label}</span>
            {details && (
                <SimpleTooltip content={details}>
                    <Info className="size-3.5 cursor-pointer hover:opacity-75 transition-opacity transform-gpu" />
                </SimpleTooltip>
            )}
        </div>

        {/* Field */}
        <div>{children}</div>
    </div>
);
export default DataField;
