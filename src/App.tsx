import { ThemeProvider } from "@/components/theme-provider";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "@/pages/Home";
import NavBar from "@/components/NavBar";
import Settings from "@/pages/Settings";
import PageTransition from "./pages/PageTransition";

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="settings"
            element={
              <PageTransition>
                <Settings />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
