import React from "react";

import Form from "./Form";

const App = () => {
  return (
    <Form
      config={[
        {
          type: "email",
          id: "email",
          label: "Enter you Email",
          required: true
        },
        {
          type: "string",
          id: "username",
          label: "Enter you username",
          required: true,
          props: { disabled: true, color: "red" }
        },
        {
          type: "button",
          id: "button",
          value: "Submit Button"
        }
      ]}
    >
      <Form.Toggle size="medium" inline />
      <Form.Button color="blue" size="huge">
        Submit
      </Form.Button>
      <Form.Button color="purple" size="large">
        Submit
      </Form.Button>
      <Form.Button color="pink" size="medium">
        Submit
      </Form.Button>
      <Form.Button color="yellow">Submit</Form.Button>

      <Form.Button color="red" size="small">
        Submit
      </Form.Button>
    </Form>
  );
};

export default App;
