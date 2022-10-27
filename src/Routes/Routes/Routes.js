import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOutPage from "../../Pages/CheckOutPage/CheckOutPage";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: "/checkOut",
        element: <CheckOutPage></CheckOutPage>,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);
