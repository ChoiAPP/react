import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button ({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}
// propTypes 에서 첫글자 P의 대소문자 주의

export default Button;