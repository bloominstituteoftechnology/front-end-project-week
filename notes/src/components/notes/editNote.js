import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { FormContainer } from '../../style/style';

class EditNote extends Component {
  state = {
    id: this.props.match.params.id,
    title: '',
    textBody: '',
}

componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
    .then(res =>{
      this.setState({
        title:res.data.title,
        textBody:res.data.textBody
      })
    })
    .catch(err => console.log(err))
}

handleChange = (event) => {
  const {name, value} = event.target;
  this.setState(
      {
        [name]: value
      }
  )
}

handleEditNote = e => {
  e.preventDefault();
  const note = {
    title: this.state.title,
    textBody: this.state.textBody
  };
  axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${this.state.id}`, note)
    .then(response => {
      this.setState({
        note: response.data,
      });
      this.props.history.push(`/noteView/${this.state.id}`);
    })
    .catch(err => console.log(err));
};

goto = () =>{
  this.props.history.push('/')
}


  render() { 
    return ( 
      <>
      <FormContainer>
      <h1 className="form-title">Edit Note &nbsp;|<Button color="link" onClick={this.goto}>Back</Button></h1>
      <form>
        <input type="text" name="title" placeholder="note title" value={this.state.title} onChange={this.handleChange}/><br/>
        <textarea placeholder="note content" name="textBody" onChange={this.handleChange} value={this.state.textBody}/><br/>
        <Button color="primary" size="lg" onClick={this.handleEditNote}> Update</Button>
      </form>
      </FormContainer>
      </>
    );
  }
}
 
export default EditNote;