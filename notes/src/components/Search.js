import React from "react";
import { Form, FormControl } from "react-bootstrap";

const Search = props => {
  return (
    <div className="container">
      <Form>
        <FormControl
          type="text"
          name="search"
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
