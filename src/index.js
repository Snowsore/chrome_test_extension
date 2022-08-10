import { createRoot } from "react-dom/client";

import App from "./App";
import "./style.css";

const container = document.getElementById("translator");
const root = createRoot(container);
root.render(<App />);
