import React from 'react';
import './note.css';
import { Link } from 'react-router-dom';

export class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      title: '',
      body: ''
    }
  }

  handleInputText = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleClicked = e => {
    this.props.onSubmit(this.state.title, this.state.body);
  };

    render() {
        return <div className="col-9 right__side">
            <div className="row">
              <div className="col-3">
                <h4>Create New Note:</h4>
              </div>
            </div>
            <div className="row">
              <form>
                <input className="note-title" type="text" placeholder="Note Title" name="title" onChange={this.handleInputText} />
                <input className="note-body" type="textarea" placeholder="Note Content" name='body' onChange={this.handleInputText} />
                <Link to="/">
                  <button className="save" onClick={this.handleClicked}>Save</button>
                </Link>
              </form>
            </div>
          </div>;
    }
}
