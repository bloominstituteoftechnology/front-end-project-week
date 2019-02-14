import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { FormContainer } from '../../style/style';

class EditNote extends Component {
  constructor(props){
    super(props);
    // this.note =[]
    this.state = {
      id: this.props.match.params.id,
      title:'',
      textBody: '',
  }
} 


componentDidMount() {
  const url = process.env.REACT_APP_API_URL
    axios.get(`${url}/${this.props.match.params.id}`)
    .then(res =>{
      this.note = res.data[0]
      this.setState({
       title: this.note.title,
       textBody:this.note.textBody
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
  const url = process.env.REACT_APP_API_URL
  const note = {
    title: this.state.title,
    textBody: this.state.textBody
  };
  axios
    .put(`${url}/${this.state.id}`, note)
    .then(res => {
      this.setState({
        note: res.data,
      });
      this.props.history.push(`/noteView/${this.state.id}`);
    })
    .catch(err => console.log(err));
};

goto = () =>{
  this.props.history.push(`/noteView/${this.state.id}`)
}

  render() { 
    console.log(this.note)
    return(
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
    )
  }
}
 
export default EditNote;


