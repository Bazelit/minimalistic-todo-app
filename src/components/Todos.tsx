import Loading from "@/components/Loading";
import { Todo } from "@/types/todoType";
import { Checkbox } from "@/components/ui/checkbox";
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "@/redux/todosApi";
import Dialog from "./Dialog";
import { Button } from "./ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import TodoProgress from "./TodoProgress";

const Todos = () => {
  const { t } = useTranslation();
  const { data, error, isLoading } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const totalTodos = data?.length || 0;
  const completedTodos = data?.filter((todo) => todo.completed).length || 0;
  const progressValue =
    totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  const handleCheckboxChange = async (todo: Todo) => {
    try {
      await updateTodo({ ...todo, completed: !todo.completed });
    } catch (error) {
      console.error(t("Error when receiving tasks"), error);
    }
  };

  if (error) {
    return (
      <div className="emptyTodos">
        <h2>😥 {t("Error when receiving tasks")}</h2>
      </div>
    );
  }

  return (
    <div className="todos">
      {isLoading ? (
        <Loading />
      ) : data && data.length === 0 ? (
        <div className="emptyTodos">
          <h2>У вас нет заметок</h2>
          <p>Нажмите на "+", чтобы добавить</p>
        </div>
      ) : (
        <>
          <TodoProgress
            progressValue={progressValue}
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <div className="mainTodos">
            <div className="w-[100%]">
              {data?.map((todo: Todo) => (
                <div
                  key={todo.id}
                  className="todo flex items-center justify-between"
                >
                  <div onClick={() => handleCheckboxChange(todo)}>
                    <Checkbox
                      className={`checkbox ${todo.completed && "active"}`}
                      checked={todo.completed}
                    />
                    <span>{todo.name}</span>
                  </div>
                  <Button
                    className="rounded-full border-none"
                    variant={"outline"}
                    size={"icon"}
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <Cross2Icon className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <Dialog />
        </>
      )}
    </div>
  );
};

export default Todos;
