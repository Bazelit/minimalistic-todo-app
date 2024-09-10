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
import { useDeleteTodoMutation, useGetTodosQuery } from "@/redux/todosApi";
import { useToast } from "@/hooks/use-toast";

const Dialog = () => {
  const { data } = useGetTodosQuery();
  const { toast } = useToast();
  const [delteTodo] = useDeleteTodoMutation();

  const handleDeleteAll = async () => {
    if (data && data.length > 0) {
      try {
        for (const item of data) {
          await delteTodo(item.id).unwrap();
        }
        return toast({
          description: "Заметки очищены",
        });
      } catch (error) {
        console.error("Ошибка при удалении элементов:", error);
      }
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="rounded-full" variant="outline" size="icon">
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
          <AlertDialogAction onClick={handleDeleteAll}>
            Подтвердить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
