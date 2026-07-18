import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import NotFound from "./NotFound";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";
import ProjectDetails from "./ProjectDetails";
import PrivacyPolicy from "./PrivacyPolicy";


 

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Services", element: <Services /> },
      { path: "Projects", element: <Projects /> },
      { path: "Contact", element: <Contact /> },
      {
        path: "Projects/:id",
        element: <ProjectDetails />,
      },
      { 
        path:"PrivacyPolicy", element:<PrivacyPolicy />,
      },
 
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
