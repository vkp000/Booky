import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import appRoutes from "./routes/routes";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    
      <AppLayout>
        <Routes>{appRoutes}</Routes>
      </AppLayout>
    
  );
}

export default App;
