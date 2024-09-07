import { ThemeProvider } from "@/components/theme-provider";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import NavBar from "@/components/NavBar";
import Settings from "@/pages/Settings";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
