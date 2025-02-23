import { NumericFormat } from "react-number-format";
import PropTypes from 'prop-types';

function MoneyText({ value, currency = "USD", className = "" }) {
  return (
    <p className={className}>
      <NumericFormat
        value={value}
        displayType="text"
        thousandSeparator={true}
        prefix={currency === "USD" ? "$" : currency === "EUR" ? "€" : "R$ "}
        decimalScale={2}
        fixedDecimalScale={true}
      />
    </p>
  );
}
MoneyText.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string,
  className: PropTypes.string,
};

export default MoneyText;
