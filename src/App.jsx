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
import { useEffect , useState } from "react";
import { useTranslation } from "react-i18next";
import LoadingScreen from "./LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css";


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

  
  const { i18n } = useTranslation();
   const [loading, setLoading] = useState(true);


useEffect(() => {
  document.documentElement.lang = i18n.language;

  document.documentElement.dir =
    i18n.language === "ar" ? "rtl" : "ltr";
}, [i18n.language]);


  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return <LoadingScreen />;

  }

  
  return <RouterProvider router={router} />;

  

}
