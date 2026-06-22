import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "@fontsource/poppins";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    <div className="bg-gradient-to-b from-[#DCA2FF] to-[#55007A]">
      <App />
    </div>{" "}
  </BrowserRouter>,
);
