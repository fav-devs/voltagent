import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { StrictMode } from "react";
import App from "./App.tsx";
import Login from "./components/Login";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
