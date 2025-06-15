import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { RootState } from "@/redux/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSelector } from "react-redux";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DatePickerProps {
  date?: Date;
  onDateChange: (date?: Date) => void;
}

export function DatePickerDemo({date, onDateChange}: DatePickerProps) {
  const todoDateValue = useSelector(
    (state: RootState) => state.todoDate.todoDateValue
  );

  return (
    <Popover>
      <TooltipProvider>
        <Tooltip>
          <PopoverTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "btn justify-start text-left font-normal",
                  !todoDateValue && "text-muted-foreground"
                )}
              >
                <CalendarIcon/>
              </Button>
            </TooltipTrigger>
          </PopoverTrigger>
          <TooltipContent>
            {date ? format(date, "PPP") : "Select a date"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date ?? undefined}
          onSelect={onDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
