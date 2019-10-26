import React from "react";
import PropTypes from "prop-types";

import Label from "./Label";
import Input from "./Input";
import Toggle from "./Toggle";
import Button from "./Button";

const Form = props => {
  const onFormSubmit = event => {
    event.preventDefault();
    props.onSubmit();
  };

  return (
    <form {...props} onSubmit={onFormSubmit}>
      {props.children}
    </form>
  );
};

Form.Label = Label;
Form.Input = Input;
Form.Button = Button;
Form.Toggle = Toggle;

Form.propTypes = {
  props: PropTypes.object
};

Form.defaultProps = {
  props: {}
};

export default Form;
