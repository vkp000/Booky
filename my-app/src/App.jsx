// src/App.js

import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { appRoutes, publicRoutes } from "./routes/routes";

function AppRoutes() {
  const location = useLocation();
  const isPublicRoute = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <Routes>
      {isPublicRoute ? publicRoutes : appRoutes.map(route => (
        <Route
          key={route.key}
          path={route.props.path}
          element={<AppLayout>{route.props.element}</AppLayout>}
        />
      ))}
    </Routes>
  );
}

function App() {
  return (
    // <Router>
      <AppRoutes />
    // {/* </Router> */}
  );
}

export default App;
