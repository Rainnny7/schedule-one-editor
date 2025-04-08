"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

interface CalendarPopoverProps {
    date?: Date;
    onDateChange?: (date: Date | undefined) => void;
}

const CalendarPopover = ({ date, onDateChange }: CalendarPopoverProps) => (
    <Popover>
        <PopoverTrigger asChild>
            <Button
                variant={"outline"}
                className={cn(
                    "pl-3 text-left font-normal",
                    !date && "text-muted-foreground"
                )}
            >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                <CalendarIcon className="ml-1.5 size-4 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
            <Calendar
                mode="single"
                selected={date}
                onSelect={onDateChange}
                disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
            />
        </PopoverContent>
    </Popover>
);
export default CalendarPopover;
