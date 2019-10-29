import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import validator from "validator";

import Label from "./Label";
import Input from "./Input";
import Toggle from "./Toggle";
import Button from "./Button";

const Form = props => {
  const getInitialStates = () => {
    const states = {
      errors: {},
      fields: {}
    };

    const { config } = props;

    config.forEach(item => {
      if (
        ["email", "string", "text", "number", "password"].includes(item.type)
      ) {
        states.fields[item.id] = item.initialValue || "";
      } else {
        states.fields[item.id] = item.initialValue || null;
      }
      states.errors[item.id] = null;
    });

    return states;
  };

  const [state, setState] = useState(getInitialStates());

  const updateField = (fieldName, value) => {
    setState(prevState => ({
      fields: {
        ...prevState.fields,
        [fieldName]: value
      },
      errors: {
        ...prevState.errors,
        [fieldName]: null
      }
    }));
  };

  const renderFields = () => {
    const { config } = props;

    const fields = config.map(item => {
      if (["string", "email", "number", "password"].includes(item.type)) {
        return (
          <div key={item.id}>
            <Label>{item.label}</Label>
            <Input
              value={state.fields[item.id] || ""}
              onChange={({ target: { value } }) => {
                updateField(item.id, value);
              }}
              placeholder={item.placeholder}
              type={item.type}
              {...item.props}
            />
          </div>
        );
      }

      if (item.type === "button") {
        return (
          <div key={item.id}>
            <Button {...item.props}>{item.value}</Button>
          </div>
        );
      }

      return null;
    });

    return <React.Fragment>{fields}</React.Fragment>;
  };

  const validate = () => {
    const errors = {};

    const { config } = props;

    config.forEach(item => {
      let isItemRequired;

      if (item.required) {
        isItemRequired = item.required;
      } else {
        isItemRequired = false;
      }

      if (isItemRequired && !state.fields[item.id]) {
        errors[item.id] = `${item.label} is required`;
        return;
      }

      if (item.type === "email" && !validator.isEmail(state.fields[item.id])) {
        errors[item.id] = "Invalid email";
      }

      if (item.type === "number") {
        if (
          item.required === true &&
          typeof state.fields[item.id] === "string" &&
          !validator.isNumeric(state.fields[item.id])
        ) {
          errors[item.id] = "Invalid number";
        } else if (
          item.minValue &&
          Number.parseFloat(state.fields[item.id]) < item.minValue
        ) {
          errors[
            item.id
          ] = `${item.label} cannot be less than ${item.minValue}`;
        } else if (
          item.maxValue &&
          Number.parseFloat(state.fields[item.id]) > item.maxValue
        ) {
          errors[
            item.id
          ] = `${item.label} cannot be more than ${item.maxValue}`;
        }
      }
    });

    const valid = Object.keys(errors).length === 0;
    return {
      errors,
      valid
    };
  };

  const getData = () => {
    const { valid, errors } = validate();

    if (valid) {
      const { fields } = state;
      const { config } = props;

      const validatedData = Object.keys(fields).reduce((acc, key) => {
        const item = config.filter(item => item.id === key)[0];

        if (item.type === "number") {
          const number = Number.parseFloat(fields[key]);
          acc[key] = !Number.isNaN(number) ? number : null;
        } else {
          acc[key] = fields[key];
        }

        return acc;
      }, {});

      return validatedData;
    }

    setState(prevState => ({ ...prevState, errors }));

    return null;
  };

  const onFormSubmit = event => {
    const { onSubmit } = props;

    event.preventDefault();

    if (onSubmit) {
      const data = getData();

      if (data) {
        onSubmit(data);
      } else {
      }
    }
  };

  return (
    <StyledForm
      {...props}
      onKeyDown={event => {
        if (event.keycode === 13) {
          onFormSubmit(event);
        }
      }}
    >
      {renderFields()}
      {props.children}
    </StyledForm>
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

const StyledForm = styled.form`
  max-width: 100%;
  height: 100%;
  margin: 1em;
`;
