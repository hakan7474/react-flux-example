import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  let wrapperClass = "form-group";

  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type={props.type}
          name={props.name}
          onChange={props.onChange}
          className={props.className}
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
  type: "text",
};

export default TextInput;
