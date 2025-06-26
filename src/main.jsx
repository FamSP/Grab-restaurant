import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import Addrestaurant from "./Pages/Addrestaurant";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Addrestaurant />
  </StrictMode>
);
