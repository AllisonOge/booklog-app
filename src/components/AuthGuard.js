import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebase-config";

const AuthGuard = () => {
  const [user, loading, error] = useAuthState(auth);
  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default AuthGuard;
