import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Messaging from "../pages/Messaging.jsx";
import Notifications from "../pages/Notifications.jsx";
import Profile from "../pages/Profile.jsx";
import Settings from "../pages/Settings.jsx";
import BooksPage from "../components/Book/BooksPage.jsx";

const appRoutes = [
  <Route path="/" element={<Home />} key="/" />,
  <Route path="/register" element={<Register />} key="/register" />,
  <Route path="/login" element={<Login />} key="/login" />,
  <Route path="/dashboard" element={<Dashboard />} key="/dashboard" />,
  <Route path="/messaging" element={<Messaging />} key="/messaging" />,
  <Route path="/notifications" element={<Notifications />} key="/notifications" />,
  <Route path="/profile" element={<Profile />} key="/profile" />,
  <Route path="/settings" element={<Settings />} key="/settings" />,
  <Route path="/books" element={<BooksPage />} />,
];

export default appRoutes;
