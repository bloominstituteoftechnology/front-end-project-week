import React, {Component} from "react";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

class EditNote extends Component {
  constructor(props) {
    super(props);
     this.state = {
      notes: props.notes,
      title: "",
      textBody:""
    };
  }
  


  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };


  handleEdit = (event, _id) => {
    event.preventDefault();

  }


  render() {
    return (
      <form onSubmit="">
        <FormGroup>
          <Input
            type="textarea"
            name="title"
            placeholder="Note Title"
            onChange={this.handleChange}
            value={this.props.title}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="note-content-input"
            type="textarea"
            name="textBody"
            placeholder="Note Content"
            onChange={this.handleChange}
            value={this.props.textBody}
          />
        </FormGroup>
        <Link to={"/"}>
          <button onClick={this.handleEdit}>Save</button>
        </Link>
      </form>
    );
  }
}

export default EditNote;
