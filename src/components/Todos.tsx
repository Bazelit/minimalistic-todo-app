import { TypeTodo } from "@/types/todoType";
import { useTranslation } from "react-i18next";
import { useGetTodosQuery, useUpdateTodoMutation } from "@/redux/todosApi";

import Todo from "./Todo";
import Loading from "@/components/Loading";
import DeleteDialog from "./DeleteDialog";
import TodoProgress from "./TodoProgress";

const Todos = () => {
  const { t } = useTranslation();
  const { data, error, isLoading } = useGetTodosQuery();
  const [updateTodo] = useUpdateTodoMutation();

  const totalTodos = data?.length || 0;
  const completedTodos = data?.filter((todo) => todo.completed).length || 0;
  const progressValue =
    totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  const handleCheckboxChange = async (todo: TypeTodo) => {
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
          <h2>{t("You don't have any notes")}</h2>
          <p>{t("Click on the '+' to add")}</p>
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
              <Todo data={data} handleCheckboxChange={handleCheckboxChange} />
            </div>
          </div>
          <DeleteDialog />
        </>
      )}
    </div>
  );
};

export default Todos;
