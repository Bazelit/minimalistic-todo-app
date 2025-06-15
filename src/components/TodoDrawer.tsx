import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Icon from "@mdi/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mdiPlus } from "@mdi/js";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAddTodoMutation } from "@/redux/todosApi";
import { useTranslation } from "react-i18next";
import { DatePickerDemo } from "./DatePicker";

const TodoDrawer = () => {
  const [addTodo] = useAddTodoMutation();
  const [todoTitle, setTodoTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleAddTodo = async () => {
    if (todoTitle) {
      await addTodo({
        name: todoTitle,
        completed: false,
        date: selectedDate,
      }).unwrap();
      setTodoTitle("");
    } else {
      return toast({
        variant: "destructive",
        description: `${t("The task cannot be empty!")}`,
      });
    }
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="fab">
          <Icon path={mdiPlus} size={1} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{t("Do you want to add a task?")}</DrawerTitle>
          <DrawerDescription className="flex">
            <Input
              value={todoTitle}
              className="mr-2"
              onChange={(e) => setTodoTitle(e.target.value)}
            />
            <DatePickerDemo
              date={selectedDate}
              onDateChange={setSelectedDate}
            />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button
              style={{ width: "100%" }}
              className="btn"
              onClick={handleAddTodo}
            >
              {t("Add")}
            </Button>
          </DrawerClose>
          <DrawerClose>
            <Button style={{ width: "100%" }} className="btn" variant="outline">
              {t("Cancel")}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default TodoDrawer;
