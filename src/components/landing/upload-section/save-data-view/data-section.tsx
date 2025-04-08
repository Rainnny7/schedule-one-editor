import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const DataSection = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3.5 sm:space-y-1">
            {children}
        </CardContent>
    </Card>
);
export default DataSection;
