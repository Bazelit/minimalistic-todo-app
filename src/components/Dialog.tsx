import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";
import { useDeleteAllTodosMutation } from "@/redux/todosApi";

const Dialog = () => {
  const [deleteAllTodos] = useDeleteAllTodosMutation();

  const handleClearAll = async () => {
    try {
      await deleteAllTodos();
    } catch (error) {
      console.error("Ошибка при очистке задач", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="clearBtn">
          <Icon className="mr-5" path={mdiTrashCan} size={1} />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Очистить все заметки?</AlertDialogTitle>
          <AlertDialogDescription>
            Вы уверены, что хотите удалить все заметки? Это действие необратимо,
            и все ваши заметки будут удалены навсегда. Пожалуйста, подтвердите
            ваше решение.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={handleClearAll}>
            Подтвердить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
