import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layouts/Root.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import EmailPassword from "./Pages/EmailPassword.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import About from "./Pages/About.jsx";
import Blogs from "./Pages/Blogs.jsx";
import PrivateRoute from "./routes/privateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/emailPass",
        Component: EmailPassword,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
