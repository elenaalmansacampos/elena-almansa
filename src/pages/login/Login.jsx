import "./Login.scss";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/authContext";

import {
  FaArrowRight,
  FaEye,
  FaEyeSlash
} from "react-icons/fa6";

function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await login(username.trim(), password);
      navigate("/admin", { replace: true });
    } catch (requestError) {
      const status = requestError.response?.status;

      if (status === 401) {
        setError("Usuario o contraseña incorrectos.");
      } else if (status === 429) {
        setError("Demasiados intentos. Espera un minuto e inténtalo de nuevo.");
      } else if (status === 400) {
        setError("Revisa los datos introducidos.");
      } else {
        setError("No se pudo conectar con el servidor.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="login">
      <header className="login__header">
        <h1>
          ELENA ALMANSA
        </h1>
      </header>

      <section className="login__card">
        <h2>
          Bienvenida de nuevo
        </h2>

        <p className="login__subtitle">
          Accede a tu cuenta de Elena Almansa
        </p>

        <form
          className="login__form"
          onSubmit={handleLogin}
        >
          <label htmlFor="login-username">
            USUARIO
          </label>

          <input
            id="login-username"
            type="text"
            placeholder="Elena"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <label htmlFor="login-password">
            CONTRASEÑA
          </label>

          <div className="login__password">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button
              type="button"
              className="login__toggle-password"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            className="login__button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Accediendo..." : "Iniciar sesión"}
            <FaArrowRight />
          </button>

          {error && (
            <p className="login__error">
              {error}
            </p>
          )}
        </form>
      </section>

      <footer className="login__footer">
        <p>
          © {new Date().getFullYear()} Elena Almansa.
        </p>
      </footer>
    </section>
  );
}

export default Login;
