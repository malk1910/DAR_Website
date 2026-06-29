import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import NotFound from "./NotFound";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";


 

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },

 
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
