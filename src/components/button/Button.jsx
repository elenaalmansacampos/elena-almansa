import { Link } from "react-router-dom";

import "./Button.scss";

function Button({
  children,
  variant = "primary",
  href,
  to,
  type = "button",
  ...props
}) {
  if (to) {
    return (
      <Link
        to={to}
        className={`button button--${variant}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`button button--${variant}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`button button--${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
