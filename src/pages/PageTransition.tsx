import { motion } from "framer-motion";
import { FC } from "react";

type PageTransition = {
  children: any;
};

const PageTransition: FC<PageTransition> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
