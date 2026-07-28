import "./Contact.scss";

import sagradaImage from "../../assets/images/sagrada-familia-barcelona.png";

import {
  FaEnvelope,
  FaLocationDot,
  FaShareNodes
} from "react-icons/fa6";


function Contact() {

  return (

    <main className="contact">


      {/* HERO */}

      <section className="contact__hero">


        <span className="contact__label">
          CONTACTO
        </span>



        <h1>

          Hablemos de tu
          <br />
          próximo gran
          <br />
          proyecto

        </h1>



        <p>

          ¿Tienes una idea, un proyecto digital o necesitas mejorar tu
          presencia online? Estoy disponible para colaborar en proyectos de
          desarrollo web y soluciones Full Stack.

        </p>


      </section>





      {/* CONTENIDO PRINCIPAL */}

      <section className="contact__content">



        {/* COLUMNA IZQUIERDA */}

        <div className="contact__left">





          <section className="contact__info">





            {/* EMAIL */}

            <article className="contact__card">


              <div className="contact__icon">

                <FaEnvelope />

              </div>



              <div>


                <span>
                  EMAIL
                </span>



                <h3>
                  elenaalmansacampos@gmail.com
                </h3>


              </div>


            </article>






            {/* UBICACIÓN */}

            <article className="contact__card">


              <div className="contact__icon">

                <FaLocationDot />

              </div>



              <div>


                <span>
                  UBICACIÓN
                </span>



                <h3>

                  Barcelona, España
                  <br />
                  Remoto

                </h3>


              </div>


            </article>






            {/* REDES */}

            <article className="contact__card">


              <div className="contact__icon">

                <FaShareNodes />

              </div>



              <div>


                <span>
                  REDES
                </span>



                <h3 className="contact__links">


                  <a
                    href="https://www.linkedin.com/in/elena-almansa-5315a017/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>



                  <a
                    href="https://github.com/elenaalmansacampos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>



                </h3>


              </div>


            </article>





          </section>





          {/* IMAGEN BARCELONA */}

          <div className="contact__image">


            <img

              src={sagradaImage}

              alt="Sagrada Familia Barcelona"

            />


          </div>




        </div>








        {/* FORMULARIO DERECHA */}

        <section className="contact__form-card">


          <h2>
            Envía un mensaje
          </h2>




          <form>




            <label>
              NOMBRE COMPLETO
            </label>



            <input

              type="text"

              placeholder="Tu nombre"

            />






            <label>
              EMAIL
            </label>



            <input

              type="email"

              placeholder="correo@ejemplo.com"

            />







            <label>
              MENSAJE
            </label>




            <textarea

              placeholder="Cuéntame sobre tu proyecto..."

            />







            <button type="submit">

              Enviar Propuesta

            </button>





          </form>



        </section>






      </section>







      {/* MAPA */}

      <section className="contact__map">


        <iframe

          title="Mapa Barcelona"

          src="https://www.google.com/maps?q=Barcelona&output=embed"

          loading="lazy"

        />


      </section>





    </main>

  );

}


export default Contact;