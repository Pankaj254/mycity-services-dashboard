import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

const AppRouter = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default AppRouter

