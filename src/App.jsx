import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import NotFound from "./NotFound";

 

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Home", element: <Home /> },
 
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
