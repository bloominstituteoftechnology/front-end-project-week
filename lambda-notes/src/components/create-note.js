import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { saveNote, setHome } from '../REDUX/actions';
import { connect } from 'react-redux';
import { Button, Collapse } from 'reactstrap';
import Remarkable from 'remarkable';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      toggleMarkdown: false
    };
  }

  componentDidMount() { this.props.setHome(false) }

  handleSaveNote = () => {
    const newNote = { title: this.state.title, content: this.state.content };
    this.props.saveNote(newNote);
    this.setState({ title: "", content: "" });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return {__html: md.render(this.state.content)};
  }

  render() {
    return (
      <div className="PrimaryContainer__newNote">
        <h1 className="PrimaryContainer__header">Create New Note:</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Input 
            type="text"
            className="col-7"
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={event => this.setState({ [event.target.name]: event.target.value })}
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="mr-2 text-right">markdown support</div>
            <div className="">
              <div className="onoffswitch">
                <input 
                  onClick={() => this.setState({ toggleMarkdown: !this.state.toggleMarkdown })}
                  type="checkbox" 
                  name="onoffswitch" 
                  className="onoffswitch-checkbox" 
                  id="myonoffswitch"
                  />
                <label className="onoffswitch-label m-0" for="myonoffswitch">
                  <span className="onoffswitch-inner"></span>
                  <span className="onoffswitch-switch"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="d-flex flex-column">
          <Input 
            type="textarea"
            name="content"
            className="ContentInput"
            placeholder="Note Content"
            value={this.state.content}
            onChange={event => this.setState({ [event.target.name]: event.target.value })}
          />
          <br/>
          <Collapse isOpen={this.state.toggleMarkdown}>
            <div dangerouslySetInnerHTML={this.getRawMarkup()} className="output-text bg-dark text-white ContentInput mb-4"></div>
          </Collapse>
        </div>
        <Link to="/home" onClick={() => this.handleSaveNote()}>
          <Button className="Button col-3">Save</Button>
        </Link>
      </div>
    )
  }
}

export default connect(null, { saveNote, setHome })(NewNote);