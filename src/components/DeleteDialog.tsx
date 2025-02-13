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
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useDeleteTodoMutation, useGetTodosQuery } from "@/redux/todosApi";

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
    <div className="text-center mt-10">
      <AlertDialog>
        <AlertDialogTrigger>
          <Button
            className="rounded-full btn"
            variant="outline"
            size="default"
          >
            <TrashIcon className="h-5 w-5 mr-1" />
            <span>{t("Clear all tasks")}</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("Clear all tasks")}?</AlertDialogTitle>
            <AlertDialogDescription>
              {t(
                "Are you sure you want to delete all the tasks? This action is irreversible, and all your tasks will be deleted forever."
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
    </div>
  );
};

export default Dialog;
