import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FC, useState } from "react";
import { Button } from "./ui/button";
import { TypeTodo } from "@/types/todoType";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { useDeleteTodoMutation } from "@/redux/todosApi";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";

interface ITodoDropdownMenu {
  todo: TypeTodo;
}

const TodoDropdownMenu: FC<ITodoDropdownMenu> = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [modal, setModal] = useState(false);

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
            onClick={() => setModal(!modal)}
            className="cursor-pointer"
          >
            <Pencil1Icon className="h-5 w-5 mr-2" /> Edit task
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => deleteTodo(todo.id)}
          >
            <TrashIcon className="h-5 w-5 mr-2" /> Delete task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {modal ? (
        <div>
          <h2>Изменить заметку</h2>
          <Input value={todo.name} />
        </div>
      ) : null}
    </>
  );
};

export default TodoDropdownMenu;
