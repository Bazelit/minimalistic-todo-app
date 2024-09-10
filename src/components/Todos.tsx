import Loading from "@/components/Loading";
import { Todo } from "@/types/todoType";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "@/redux/todosApi";
import Dialog from "./Dialog";
import { Button } from "./ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";

const Todos = () => {
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
      console.error("Ошибка при обновлении задачи", error);
    }
  };

  if (error) {
    return <h2>😥 Ошибка при получении заметок</h2>;
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
          <Progress className="mb-5" value={progressValue} />
          <div className="mainTodos">
            <div className="w-4/5">
              {data?.map((todo: Todo) => (
                <div
                  key={todo.id}
                  className="todo flex items-center justify-between"
                >
                  <div>
                    <Checkbox
                      className={`checkbox ${todo.completed && "active"}`}
                      checked={todo.completed}
                      onCheckedChange={() => handleCheckboxChange(todo)}
                    />
                    <span>{todo.name}</span>
                  </div>
                  <Button
                    className="rounded-full"
                    variant={"outline"}
                    size={"icon"}
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <Cross2Icon className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
            <Dialog />
          </div>
        </>
      )}
    </div>
  );
};

export default Todos;
