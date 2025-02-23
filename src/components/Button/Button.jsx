import PropTypes from "prop-types";
import "./Button.scss";

function Button({ children, label, className }) {
  return (
    <button className={`btn p-3 ${className}`}>
      {children}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
