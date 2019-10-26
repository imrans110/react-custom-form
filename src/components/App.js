import React, { useState } from "react";

import Form from "./Form";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <Form>
      <Form.Label>Username</Form.Label>
      <Form.Input
        type="text"
        color="blue"
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
      <Form.Toggle size="medium" />
      <Form.Button color="blue">Submit</Form.Button>
    </Form>
  );
};

export default App;
