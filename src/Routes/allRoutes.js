import React from "react";
import { Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Register from "../pages/Authentication/Register";
import Error500 from '../pages/AuthenticationInner/Errors/Error500';
import Maintenance from '../pages/Pages/Maintenance/Maintenance';
import ComingSoon from '../pages/Pages/ComingSoon/ComingSoon';
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';

// User Profile
import UserProfile from "../pages/Authentication/user-profile";
import TruckOptimization from "../pages/Order/TruckOptimization/TruckOptimization";
import RoutePlanning from "../pages/Order/RoutePlanning/RoutePlanning";
import Customer from "../pages/Customer/Customer";
import CustomerDetails from "../pages/Customer/CustomerDetails";

const authProtectedRoutes = [
  { path: "/delivery-tracking", component: <Order /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/index", component: <Dashboard /> },
  { path: "/customer", component: <Customer /> },
  { path: "/view-customer", component: <CustomerDetails /> },


  
  //Submenu Pages
  { path: "/truck-optimization", component: <TruckOptimization /> },
  { path: "/route-planning", component: <RoutePlanning /> },


  //User Profile
  { path: "/profile", component: <UserProfile /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Alt404 /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },


  //AuthenticationInner pages
  { path: "/auth-500", component: <Error500 /> },
  { path: "/pages-maintenance", component: <Maintenance /> },
  { path: "/pages-coming-soon", component: <ComingSoon /> },
  { path: "/auth-offline", component: <Offlinepage /> },
];

export { authProtectedRoutes, publicRoutes };
