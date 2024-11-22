import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Main from "../Layout/Main";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import BlogDetails from "../pages/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "projectDetails/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-rosy-pi.vercel.app/api/projects/${params.id}`
          ),
      },
      {
        path: "projectDetails/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-rosy-pi.vercel.app/api/projects/${params.id}`
          ),
      },
      {
        path: "blogDetails/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-rosy-pi.vercel.app/api/blogs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
