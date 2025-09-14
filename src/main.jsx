import { createRoot } from "react-dom/client";
import App from "./App";
import { SidebarContextProvider } from "./context/SidebarContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";

const root = createRoot(document.querySelector("#root"));
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/video/:video_id",
        element: <VideoPage />,
      },
      {
        path: "/createrDetail/:user_id",
      },
    ],
  },
]);

root.render(
  <SidebarContextProvider>
    <RouterProvider router={Router} />
  </SidebarContextProvider>
);
