import { createRoot } from "react-dom/client";
import App from "./App";
import { SidebarContextProvider } from "./context/SidebarContext";

const root = createRoot(document.querySelector("#root"));

root.render(
  <SidebarContextProvider>
    <App />
  </SidebarContextProvider>
);
