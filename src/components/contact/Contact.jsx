import { useState } from "react";
import { sendContact } from "../../services/contactService";
import "./Contact.scss";


function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const [status, setStatus] = useState("");


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      await sendContact(formData);

      setStatus(
        "Gracias por contactar, te responderé lo antes posible."
      );


      setFormData({
        name:"",
        email:"",
        message:""
      });


    } catch (error) {

      console.error(error);

      setStatus(
        "Ha ocurrido un error. Inténtalo de nuevo."
      );

    }

  };


  return (

    <section id="contact" className="contact">

      <div className="contact__container">


        <h2>
         Hablemos de tu próximo gran proyecto
        </h2>


        


        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >


          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />


          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />


          <textarea
            name="message"
            placeholder="Mensaje"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />


          <button type="submit">
            Enviar mensaje
          </button>


        </form>


        {status && (
          <p className="contact__status">
            {status}
          </p>
        )}


      </div>

    </section>

  );

}


export default Contact;