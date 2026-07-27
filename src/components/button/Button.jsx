import "./Button.scss";


function Button({ children, variant = "primary", href }) {

  if (href) {

    return (
      <a 
        href={href}
        className={`button button--${variant}`}
      >
        {children}
      </a>
    );

  }


  return (

    <button className={`button button--${variant}`}>

      {children}

    </button>

  );

}

export default Button;
