import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import NotFound from "./NotFound";
import Header from "./Header";
import About from "./About";

 

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: <About /> },
 
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
