import { useState } from "react";

import "./ContactForm.scss";

const CONTACT_EMAIL = "elenaalmansacampos@gmail.com";

const EMPTY_FORM = {
  name: "",
  email: "",
  message: ""
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "El nombre es obligatorio.";
  } else if (form.name.trim().length > 100) {
    errors.name = "El nombre no puede superar 100 caracteres.";
  }

  if (!form.email.trim()) {
    errors.email = "El email es obligatorio.";
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = "Introduce un email válido.";
  } else if (form.email.trim().length > 254) {
    errors.email = "El email es demasiado largo.";
  }

  if (form.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  } else if (form.message.length > 5000) {
    errors.message = "El mensaje no puede superar 5000 caracteres.";
  }

  return errors;
}

function ContactForm({ className = "", buttonLabel = "Enviar mensaje" }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));

    setFieldErrors((current) => ({
      ...current,
      [name]: undefined
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validate(form);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus(null);
      return;
    }

    const subject = encodeURIComponent("Contacto desde el portfolio");
    const body = encodeURIComponent(
      `Nombre: ${form.name.trim()}\n`
      + `Email: ${form.email.trim()}\n\n`
      + form.message.trim()
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setFieldErrors({});
    setForm(EMPTY_FORM);
    setStatus({
      type: "success",
      message:
        `Se ha abierto tu cliente de correo. Si no ocurre nada, escríbeme a ${CONTACT_EMAIL}.`
    });
  };

  return (
    <form
      className={`contactForm ${className}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="contactForm__field">
        <label htmlFor="contact-name">
          Nombre completo
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          maxLength={100}
          required
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
        />
        {fieldErrors.name && (
          <p id="contact-name-error" className="contactForm__error">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div className="contactForm__field">
        <label htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          maxLength={254}
          required
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
        />
        {fieldErrors.email && (
          <p id="contact-email-error" className="contactForm__error">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div className="contactForm__field contactForm__field--full">
        <label htmlFor="contact-message">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          minLength={10}
          maxLength={5000}
          rows="5"
          required
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
        />
        {fieldErrors.message && (
          <p id="contact-message-error" className="contactForm__error">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <div className="contactForm__actions">
        <button type="submit">
          {buttonLabel}
        </button>
      </div>

      {status && (
        <p
          className={`contactForm__status contactForm__status--${status.type}`}
          role="status"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
