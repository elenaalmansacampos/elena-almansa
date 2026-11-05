import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../context/authContext";

function ProtectedRoute() {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <p className="routeLoading">
        Comprobando sesión...
      </p>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
