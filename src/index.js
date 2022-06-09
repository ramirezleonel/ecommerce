import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import AppRouter from "./router/AppRouter";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
<AppRouter/>
);