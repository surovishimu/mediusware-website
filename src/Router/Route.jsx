import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Project from "../Components/Projects/Project";
import About from "../Components/AboutUs/About";
import Contact from "../Components/ContactUs/Contact";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/projects",
        element: <Project></Project>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
