import "./Login.scss";

import { useState } from "react";
import { login } from "../../services/authService";

import {
  FaArrowRight,
  FaEye
} from "react-icons/fa6";


function Login() {


  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");



  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");

    try {

      const data = await login(
        username,
        password
      );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "username",
        data.username
      );

      localStorage.setItem(
        "role",
        data.role
      );

      setSuccess(
        `${data.username} ya estás conectada`
      );

    } catch (error) {

      setError(
        "Usuario o contraseña incorrectos"
      );

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

          Accede a tu cuenta Elena Almansa

        </p>





        <form
          className="login__form"
          onSubmit={handleLogin}
        >



          <label>
            EMAIL
          </label>



          <input

            type="text"

            placeholder="hola@ejemplo.com"

            value={username}

            onChange={(e) =>
              setUsername(e.target.value)
            }

          />





          <div className="login__password-label">


            <label>
              CONTRASEÑA
            </label>



            <a href="#">
              ¿OLVIDASTE LA CONTRASEÑA?
            </a>



          </div>





          <div className="login__password">


            <input

              type="password"

              placeholder="••••••••"

              value={password}

              onChange={(e) =>
                setPassword(e.target.value)
              }

            />



            <FaEye />


          </div>





          <button

            className="login__button"

            type="submit"

          >


            Iniciar Sesión


            <FaArrowRight />


          </button>





          {success && (

            <p className="login__success">

              {success}

            </p>

          )}

          {error && (

            <p className="login__error">

              {error}

            </p>

          )}




        </form>




      </section>





      <footer className="login__footer">


        <p>

          © 2024 Elena Almansa. Almansa Studio Narrative.

        </p>


      </footer>





    </section>

  );

}


export default Login;
