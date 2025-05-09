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
import { useSelector, useDispatch } from "react-redux";
import { setTodoDateValie } from "@/redux/todoDateSlice";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function DatePickerDemo() {
  const todoDateValue = useSelector(
    (state: RootState) => state.todoDate.todoDateValue
  );
  const dispatch = useDispatch();

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
                <CalendarIcon />
                {/* {todoDateValue ? (
                  format(todoDateValue, "PPP")
                ) : (
                  <span>Pick a date</span>
                )} */}
              </Button>
            </TooltipTrigger>
          </PopoverTrigger>
          <TooltipContent>
            {todoDateValue ? format(todoDateValue, "PPP") : "Select a date"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={todoDateValue}
          onSelect={(todoDateValue) =>
            dispatch(setTodoDateValie(todoDateValue))
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
