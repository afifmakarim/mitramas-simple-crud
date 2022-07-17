import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tenant from "./pages/Tenants/Tenant";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<HomePage />} />
          <Route path="tenant" element={<Tenant />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
