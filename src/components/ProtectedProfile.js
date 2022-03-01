import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
const useAuth = () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    return false;
  }
  return true;
};
const ProtectedProfile = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};
export default ProtectedProfile;
