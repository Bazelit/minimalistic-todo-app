import { FC } from "react";
import { TypeTodo } from "@/types/todoType";
import { Checkbox } from "@/components/ui/checkbox";
import TodoDropdownMenu from "./TodoDropdownMenu";

interface ITodoProps {
  data: TypeTodo[] | undefined;
  handleCheckboxChange: (todo: TypeTodo) => void;
}

const Todo: FC<ITodoProps> = ({ data, handleCheckboxChange }) => {
  return (
    <>
      {data?.map((todo: TypeTodo) => (
        <div key={todo.id} className="todo flex items-center justify-between">
          <div onClick={() => handleCheckboxChange(todo)}>
            <Checkbox
              className={`checkbox ${todo.completed && "active"}`}
              checked={todo.completed}
            />
            <span className="cursor-pointer">{todo.name}</span>
          </div>
          <TodoDropdownMenu todo={todo} />
        </div>
      ))}
    </>
  );
};

export default Todo;
