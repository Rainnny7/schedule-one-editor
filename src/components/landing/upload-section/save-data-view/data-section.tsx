import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const DataSection = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => (
    <Card className="gap-2">
        <CardHeader>
            <CardTitle className="text-lg font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3.5 sm:space-y-2.5">
            {children}
        </CardContent>
    </Card>
);

export const SubDataSection = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => (
    <div className="mt-3.5 flex flex-col gap-3">
        <h3 className="font-bold">{title}</h3>

        {/* Fields */}
        <div className="flex flex-col gap-2">{children}</div>
    </div>
);

export default DataSection;
