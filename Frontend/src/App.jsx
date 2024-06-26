import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SigninPage, { action as signinAction } from "./pages/SigninPage";
import SignupPage, { action as signupAction } from "./pages/SignupPage";
import DashboardPage, {
  loader as dashboardLoader,
} from "./pages/DashboardPage";
import TransferPage, { action as transferAction } from "./pages/TransferPage";
const router = createBrowserRouter([
  { path: "/", element: <SigninPage />, action: signinAction },
  { path: "/signup", element: <SignupPage />, action: signupAction },
  { path: "/dashboard", element: <DashboardPage />, loader: dashboardLoader },
  { path: "/transfer", element: <TransferPage />, action: transferAction },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
