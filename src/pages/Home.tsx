import Todos from "@/components/Todos";
import Greeting from "@/components/Greeting";
import TodoDrawer from "@/components/TodoDrawer";
import { Toaster } from "@/components/ui/toaster";

const Home = () => {
  return (
    <div className="wrapper">
      <Greeting />
      <Toaster />
      <main className="main">
        <Todos />
      </main>
      <TodoDrawer />
    </div>
  );
};

export default Home;
