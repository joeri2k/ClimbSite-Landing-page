import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const useAuth = () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    return false;
  }
  return true;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Dashboard /> : <Outlet />;
};

export default ProtectedRoutes;
