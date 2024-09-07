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
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
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
        <Button style={{ borderRadius: "50%" }} variant="outline" size="icon">
          <TrashIcon className="h-5 w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Очистить все заметки?</AlertDialogTitle>
          <AlertDialogDescription>
            Вы уверены, что хотите удалить все заметки? Это действие необратимо,
            и все ваши заметки будут удалены навсегда.
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
