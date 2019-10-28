import React, { useState } from "react";

import Form from "./Form";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <Form>
      <Form.Label>Usersname</Form.Label>
      <Form.Input
        type="text"
        color="blue"
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
      <Form.Toggle size="medium" />
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
