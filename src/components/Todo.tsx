import { FC } from "react";
import { TypeTodo } from "@/types/todoType";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatePresence, motion } from "framer-motion";
import TodoDropdownMenu from "./TodoDropdownMenu";

interface ITodoProps {
  data: TypeTodo[] | undefined;
  handleCheckboxChange: (todo: TypeTodo) => void;
}

const Todo: FC<ITodoProps> = ({ data, handleCheckboxChange }) => {
  const taskVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5, y: -50, filter: "blur(5px)" },
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={taskVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {data?.map((todo: TypeTodo) => (
            <div
              key={todo.id}
              className="todo flex items-center justify-between"
            >
              <div onClick={() => handleCheckboxChange(todo)}>
                <Checkbox
                  className={`checkbox ${todo.completed && "active"}`}
                  checked={todo.completed}
                />
                <span className="cursor-pointer">{todo.name}</span>
                <p className="text-sm text-gray-400">{new Date(todo.date).toLocaleString("ru")}</p>
                {/* {console.log(new Date(todo.date))} */}
              </div>
              <TodoDropdownMenu todo={todo} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Todo;
