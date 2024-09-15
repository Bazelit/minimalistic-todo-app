import { FC } from "react";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";

interface ITodoProgressProps {
  progressValue: number;
  totalTodos: number;
  completedTodos: number;
}

const TodoProgress: FC<ITodoProgressProps> = ({
  progressValue,
  totalTodos,
  completedTodos,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-gray-400">{t("Progress")}</span>
        <span className="text-gray-400">
          {completedTodos}/{totalTodos}
        </span>
      </div>
      <Progress className="mb-5" value={progressValue} />
    </>
  );
};

export default TodoProgress;
