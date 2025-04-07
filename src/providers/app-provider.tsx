"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ThemeProvider } from "~/components/theme-provider";

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};
