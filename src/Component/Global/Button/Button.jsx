import "./css/Button.css";

function Button({ variant, title, onClick }) {
  return (
    <div>
      <button className={variant} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default Button;
