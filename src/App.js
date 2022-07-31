import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tenant from "./pages/Tenants/Tenant";
import HomePage from "./pages/HomePage/HomePage";
import jwtDecode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/actions/dataActions";
import AddTenant from "./pages/Tenants/AddTenant";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="home" element={<HomePage />} />
          <Route path="tenant" element={<Tenant />} />
          <Route path="tenant/add-new" element={<AddTenant />} />
        </Route>
      </Routes>
    </Router>
  );
}

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { isLoggedIn } = useSelector((state) => state.userInfo);

  if (user && isLoggedIn) {
    const decodedToken = jwtDecode(user.access_token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      console.log("expired token ", decodedToken.exp);
      //handleLogout();
      dispatch(logout());
    }
    return <Dashboard />;
  }

  return <Navigate to={redirectPath} replace />;
};

export default App;
