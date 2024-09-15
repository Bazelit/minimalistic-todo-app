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
import { useTranslation } from "react-i18next";

const Dialog = () => {
  const { t } = useTranslation();
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
          description: `${t("The tasks have been cleared")}`,
        });
      } catch (error) {
        console.error(`${t("Error deleting tasks:")}`, error);
      }
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full">
        <Button className="rounded-full mt-10" variant="outline" size="default">
          <TrashIcon className="h-5 w-5 mr-1" /> <span>{t("Clear all tasks")}</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("Clear all tasks")}?</AlertDialogTitle>
          <AlertDialogDescription>
            {t(
              "Are you sure you want to delete all the notes? This action is irreversible, and all your notes will be deleted forever."
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("Cancel")}</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAll}>
            {t("Confirm")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
