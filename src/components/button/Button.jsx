import "./Button.scss";

function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  ...props
}) {
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
