import { ReactNode } from "react";

const DataField = ({
    label,
    details,
    children,
}: {
    label: string;
    details?: string;
    children: ReactNode;
}) => (
    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-10 sm:items-center">
        {/* Label */}
        <div className="flex flex-col gap-0.5">
            <span className="font-medium">{label}</span>
            {details && (
                <p className="text-sm text-muted-foreground">{details}</p>
            )}
        </div>

        {/* Field */}
        <div>{children}</div>
    </div>
);
export default DataField;
