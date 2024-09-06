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

const TodoDrawer = () => {
  const [addTodo] = useAddTodoMutation();
  const [todoTitle, setTodoTitle] = useState<string>("");
  const { toast } = useToast();

  const handleAddTodo = async () => {
    if (todoTitle) {
      await addTodo({ name: todoTitle, completed: false }).unwrap();
      setTodoTitle("");
    } else {
      return toast({
        variant: "destructive",
        description: "Заметка не может быть пустой!",
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
          <DrawerTitle>Вы хотите добавить заметку?</DrawerTitle>
          <DrawerDescription>
            <Input
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
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
              Добавить
            </Button>
          </DrawerClose>
          <DrawerClose>
            <Button style={{ width: "100%" }} className="btn" variant="outline">
              Отмена
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default TodoDrawer;