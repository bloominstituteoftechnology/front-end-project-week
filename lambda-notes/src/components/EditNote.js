import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions';

import { Form, FormGroup, Input} from 'reactstrap';
import { withRouter } from 'react-router-dom';


import './EditNote.css';

class EditNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            id: +this.props.match.params.id,
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleTitleInput = this.handleTitleInput.bind(this);
        this.handleNoteInput = this.handleNoteInput.bind(this);
    }
  
    componentDidMount() {
        let upTitle = document.getElementById('titleInput');
        let upNote = document.getElementById('noteInput');

      const oldTitle = this.props.notesList[this.props.match.params.id].title;
      const  oldNote = this.props.notesList[this.props.match.params.id].note;

      upTitle.value = oldTitle;
      upNote.value = oldNote;
    }

    handleTitleInput = (event) => {
        this.setState({ title: event.target.value })
        console.log(this.state.title);

    }

    handleNoteInput = (event) => {
        this.setState({ note: event.target.value })
        console.log(this.state.title);
    }

    handleUpdate = (event) => {
        event.preventDefault();
        let { id, title, note } = this.state;
        this.props.updateNote( id, title, note );
        this.props.history.push("/");
    }


     createNoteRoute() {
        this.props.history.push("/create-note");
      }
    
      viewNotesRoute() {
        this.props.history.push("/");
      }
    
    render() {

        // let upTitle = document.getElementById('titleInput');
        // let upNote = document.getElementById('noteInput');
        // console.log(upNote= this.props.match.params.id);

        return (
            
            <div className="container-fluid mainDiv">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
        <div className="indColHolder">
            <div className="titleContainer">
                <div > <h1 className="mainTitle"> Lambda </h1> </div>
                <div className="botTitleDiv"> <h1 className="mainTitle"> Notes </h1> </div>
            </div> 
          
            <div> <button onClick={()=>{this.viewNotesRoute()}} className="button"> View Your Notes </button> </div>
            <div> <button onClick={()=>{this.createNoteRoute()}} className="button">Create New Notes</button> </div>

        </div>
       </div>

        <div className="col-md-9 col-sm-12 mainDiv">
        <div className="listTitle"> <h4> Edit Note: </h4> </div>
         
            
        <Form onSubmit={this.handleUpdate}>
            <FormGroup >
                <Input value={this.state.title} onChange={this.handleTitleInput}  id="titleInput" className="col-6 mb-4 mt-4" name="title" placeholder="Note Title" />
                <Input value={this.state.note}  onChange={this.handleNoteInput} id="noteInput" className="mb-2" rows="15" name="note" type="textarea" placeholder="Note Content" />
                <div className="updateButtonDive"><button className="updateButton"> Update </button></div>
            </FormGroup>       
        </Form> 
              

          
        </div>
      </div> 
    </div> // end of container 
                            
        );
    }
}


const mapStateToProps = (state) => {
    return {
      notesList: state.notesList,
    }
  }



export default connect(mapStateToProps, { updateNote })(withRouter(EditNote));
