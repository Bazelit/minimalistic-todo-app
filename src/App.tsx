import { ThemeProvider } from "@/components/ui/theme-provider";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "@/pages/Home";
import NavBar from "@/components/NavBar";
import Settings from "@/pages/Settings";
import PageTransition from "./pages/PageTransition";
import TodoDrawer from "@/components/TodoDrawer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "./redux/store";

const App = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("SW registered:", registration))
        .catch((err) => console.log("SW registration failed:", err));
    });
  }

  const location = useLocation();
  const themeValue = useSelector((state: RootState) => state.theme.themeValue);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [themeValue]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <PageTransition>
                  <Home />
                </PageTransition>
                <TodoDrawer />
              </>
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
          <Route
            path="login"
            element={
              <PageTransition>
                <LoginPage />
              </PageTransition>
            }
          />
          <Route
            path="signup"
            element={
              <PageTransition>
                <SignUpPage />
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
