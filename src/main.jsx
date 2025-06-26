import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import rounter from "./routes/rounter";
import { RouterProvider } from "react-router-dom";
import Navbar from "./Componants/Navbar";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={rounter}></RouterProvider>
  </StrictMode>
);
