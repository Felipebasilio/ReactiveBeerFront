import PropTypes from "prop-types";
import "./Button.scss";

function Button({ children, label, className, onClick }) {
  return (
    <button className={`btn p-3 ${className}`} onClick={onClick}>
      {children}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
