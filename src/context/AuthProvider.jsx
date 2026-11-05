import { useCallback, useEffect, useMemo, useState } from "react";

import {
  login as loginRequest,
  logout as logoutRequest,
  refreshSession
} from "../services/authService";
import { setAccessToken } from "../services/tokenStore";
import { AuthContext } from "./authContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    refreshSession()
      .then((data) => {
        if (!active) {
          return;
        }

        setAccessToken(data.token);
        setUser({
          username: data.username,
          role: data.role
        });
      })
      .catch(() => {
        if (active) {
          setAccessToken(null);
          setUser(null);
        }
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    const handleLogout = () => {
      setAccessToken(null);
      setUser(null);
    };

    const handleRefreshed = (event) => {
      setUser({
        username: event.detail.username,
        role: event.detail.role
      });
    };

    window.addEventListener("auth:logout", handleLogout);
    window.addEventListener("auth:refreshed", handleRefreshed);

    return () => {
      active = false;
      window.removeEventListener("auth:logout", handleLogout);
      window.removeEventListener("auth:refreshed", handleRefreshed);
    };
  }, []);

  const login = useCallback(async (username, password) => {
    const data = await loginRequest(username, password);

    setAccessToken(data.token);
    setUser({
      username: data.username,
      role: data.role
    });

    return data;
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutRequest();
    } catch {
      setAccessToken(null);
    } finally {
      setAccessToken(null);
      setUser(null);
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isAdmin: user?.role === "ADMIN",
      isLoading,
      login,
      logout
    }),
    [user, isLoading, login, logout]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
