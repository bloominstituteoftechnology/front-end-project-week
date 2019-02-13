import React from "react";
import { Form, FormControl } from "react-bootstrap";

const Search = props => {
  return (
    <div className="container">
      <Form
        inline
        style={{
          borderRight: "1px solid rgb(234, 237, 232)"
        }}
      >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={props.search}
          onChange={props.inputHandler}
        />
      </Form>
    </div>
  );
};

export default Search;
