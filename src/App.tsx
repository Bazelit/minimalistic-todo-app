import { ThemeProvider } from "@/components/theme-provider";
import TodoDrawer from "./components/Drawer";
import Greeting from "./components/Greeting";
import { useGetTodosQuery, useUpdateTodoMutation } from "./redux/todosApi";
import Loading from "./components/Loading";
import { Checkbox } from "@/components/ui/checkbox";
import { Toaster } from "@/components/ui/toaster";

type Todo = {
  id: number | string;
  name: string;
  completed: boolean;
};

const App = () => {
  const { data, error, isLoading } = useGetTodosQuery();
  const [updateTodo] = useUpdateTodoMutation();

  if (error) {
    return <h2>😥 Ошибка при получении заметок</h2>;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Greeting />
      <Toaster />
      <main className="main">
        <div className="todos">
          {isLoading ? (
            <Loading />
          ) : data && data.length === 0 ? (
            <div className="emptyTodos">
              <h2>У вас нет заметок</h2>
              <p>Нажмите на "+", чтобы добавить</p>
            </div>
          ) : (
            data?.map((todo: Todo) => (
              <div key={todo.id} className="todo">
                <Checkbox
                  className="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    updateTodo({
                      id: todo.id,
                      completed: !todo.completed,
                    });
                  }}
                />
                <span>{todo.name}</span>
              </div>
            ))
          )}
        </div>
      </main>
      <TodoDrawer />
    </ThemeProvider>
  );
};

export default App;
