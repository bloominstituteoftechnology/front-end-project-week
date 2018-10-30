import React from "react";
import { Sidebar, Form } from "../components";

class CreateView extends React.Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Form />
      </div>
    );
  }
}
export default CreateView;
