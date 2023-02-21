import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";
import AppLoading from "./AppLoading";

const AuthGuard = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  return loading ? (
    <AppLoading />
  ) : user ? (
    children
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default AuthGuard;
