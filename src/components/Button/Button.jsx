import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ label }) => {

  return (
    <button className="btn-large">
      { label }
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;

