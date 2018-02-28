import React from 'react';
import './App.css';

class CreateNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {title:'', data:''};
        
        this.onClick = this.onClick.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
  }

  onTitleChange(e) {
    this.setState({title:e.target.value});
  }

  onDataChange(e) {
    this.setState({data:e.target.value});
  }

  onClick(e) {
    const title = this.state.title;
    const data = this.state.data;
    if (title !== '' && data !== '') {
      this.props.addNote({
        id: Math.floor(Math.random() * 1000),
        title: title,
        data: data
      });
    }
  }
 render() {
    return (
      <div>
        <div className="col-xs-4">
          <input type="text" className="form-control" placeholder="Note Title" onChange={this.onTitleChange} value={this.state.title}/><br/>
          <input type="text" className="form-control" placeholder="Note Content" onChange={this.onDataChange} value={this.state.data}/>
        </div>
        <button id="submit" className="btn btn-success" onClick={this.onClick}>Save</button>
      </div>
    );
  }
};

export default CreateNote;