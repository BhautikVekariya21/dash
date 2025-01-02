import ReactDOM from "react-dom/client";
import App from "./App";
import { SidebarProvider } from "./Context/SideBarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <App />
  </SidebarProvider>
);