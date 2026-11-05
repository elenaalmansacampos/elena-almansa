import ContactForm from "./ContactForm";

import "./Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contactSection">
      <div className="contactSection__container">
        <h2>
          Hablemos de tu próximo gran proyecto
        </h2>

        <p>
          Cuéntame qué necesitas y te responderé lo antes posible.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
