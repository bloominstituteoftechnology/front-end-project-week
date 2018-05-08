  import React, { Component } from 'react';
  import { Button, Form, Label, Input } from 'reactstrap';
  import { connect } from 'react-redux';
  import { Link } from 'react-router-dom';
  
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
      event.preventDefault();
      this.props.updateNote(this.state, id);
      this.setState({ title: '', body: ''});
    }
    render() {
        return (
            <div>
              <Form>
                <Label for ='Title'>Title</Label>
                <Input type='text' name='title' value={this.state.title} onChange={this.handleChange}  placeholder='Title' />
                <Label for ='Body'>Title</Label>
                <Input type='textarea' name='body' value={this.state.body} onChange={this.handleChange} placeholder='Body' />
                <Button onClick={ this.handleUpdate }>Update Note</Button>
              </Form>
            </div>
        );
      }
    }
  
    const mapStateToProps = (state) => {
      return {
        state: state,
      }
  
    }
    
    export default connect(mapStateToProps, { updateNote})(UpdateNote);