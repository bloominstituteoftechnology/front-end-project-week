  import React, { Component } from 'react';
  import { Button, Form, Label, Input } from 'reactstrap';
  import { connect } from 'react-redux';
  import { Link, NavLink } from 'react-router-dom';
  
  import { updateNote} from '../actions';
  
  
  class UpdateNote extends Component {
    constructor() {
      super()
      this.state={
        title: '',
        body: '',
      }
    }
  
    handleChange = (event) => {
      this.setState({ [event.target.name] : event.target.value })
    }
  
    handleUpdate = (event) => {
      const id = this.props.match.params.id
      this.props.updateNote(this.state, id);
      this.setState({ title: '', body: ''});
      // this.props.history.push('/')
    }
    render() {
      console.log()
        return (
            <div>
              <Form>
                <Label for ='Title'>Title</Label>
                <Input type='text' name='title' value={this.state.title} onChange={this.handleChange}  placeholder={this.props.state.note.title} />
                <Label for ='Body'>Title</Label>
                <Input type='textarea' name='body' value={this.state.body} onChange={this.handleChange} placeholder={this.props.state.note.body} />
                <Button onClick={this.handleUpdate}>Update Note</Button>
              </Form>
            </div>
        );
      }
    }
  
    const mapStateToProps = (state) => {
      console.log(state)
      return {
        state: state,
      }
  
    }
    
    export default connect(mapStateToProps, { updateNote})(UpdateNote);