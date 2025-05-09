import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FC, useState } from "react";
import { Button } from "./ui/button";
import { TypeTodo } from "@/types/todoType";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/todosApi";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";

import { useTranslation } from "react-i18next";
import { DatePickerDemo } from "./DatePicker";

interface ITodoDropdownMenu {
  todo: TypeTodo;
}

const TodoDropdownMenu: FC<ITodoDropdownMenu> = ({ todo }) => {
  const { t } = useTranslation();
  const [updateTodo] = useUpdateTodoMutation();
  const [newName, setNewName] = useState(todo.name);
  const [deleteTodo] = useDeleteTodoMutation();
  const [modal, setModal] = useState(false);

  const handleEditTodo = async () => {
    try {
      await updateTodo({ ...todo, name: newName });
    } catch (error) {
      console.error(t("Error when receiving tasks"), error);
    }
  };

  const handleEditClick = () => {
    setModal(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            className="rounded-full border-none"
            variant={"outline"}
            size={"icon"}
          >
            <DotsVerticalIcon className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-3">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleEditClick}
          >
            <Pencil1Icon className="h-5 w-5 mr-2" /> {t("Edit task")}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => deleteTodo(todo.id)}
          >
            <TrashIcon className="h-5 w-5 mr-2" /> {t("Delete task")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={modal} onOpenChange={setModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("Change the task")}</AlertDialogTitle>
            <AlertDialogDescription className="flex">
              <Input
                value={newName}
                className="mr-2"
                onChange={(e) => setNewName(e.target.value)}
              />
              <DatePickerDemo />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("Cancel")}</AlertDialogCancel>
            <AlertDialogAction onClick={handleEditTodo}>
              {t("Confirm")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default TodoDropdownMenu;
