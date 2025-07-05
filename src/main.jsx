import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
/*
  Cambiar final de proyecto
  import "../dist/styles.min.css"
*/

import "./scss/custom.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
