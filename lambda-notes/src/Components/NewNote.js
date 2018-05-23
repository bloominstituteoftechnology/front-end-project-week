import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { withRouter, Link } from 'react-router-dom'
import { Form, Input, Button, FormGroup } from 'reactstrap';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            note: ''
         }
    }
  
    addNewNoteHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.props.notes.push(this.state)
        
    }

    render() { 
        console.log(this.props.notes)
        return (
            <div>
                <br />
                <br />
                 <Form>
                     <FormGroup>
                     <Input 
                     type="text"
                     name="title"
                     placeholder="New Title"
                     value={this.state.title}
                     />
                     <br />
                     <Input type="textarea"
                     name="content"
                     placeholder="New Note"
                     valid={this.state.note}
                     />
                     <Button onClick={this.inputHandler} >Submit</Button>
                     </FormGroup>
                     </Form>
            </div>
            
        )
    }
}


// const mapStateToProps = state => {
//     console.log("NavBarState2", state.notes);
//     return {
//       notes: state.notes
//     };
//   };

export default NewNote