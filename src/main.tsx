import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {BrowserRouter} from "react-router-dom";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
