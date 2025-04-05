import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom"; // ✅ 추가

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter> {/* ✅ 감싸줍니다 */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
