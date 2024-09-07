import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./components/NavBar";
import TodoDrawer from "./components/Drawer";
import Greeting from "./components/Greeting";
import Todos from "./components/Todos";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="wrapper">
        <Greeting />
        <Toaster />
        <main className="main">
          <Todos />
        </main>
        <TodoDrawer />
      </div>
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
