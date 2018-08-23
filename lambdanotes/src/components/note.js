import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle} from 'reactstrap';
import NoteFormEdit from './noteformedit';
import DeleteModal from './deletemodal';
import { Button } from 'reactstrap';

class Note extends Component {
    state = {
        title: '',
        note: '',
        id: null,
        edittoggle: false,
        inputTitle: '',
        inputNote: ''
    }
        
    componentDidMount() {
        const note = this.props.notes.find(note => {
            return note.id.toString() === this.props.match.params.id
        })
        this.setState({
            title: note.title,
            note: note.note,
            id: note.id,
            edittoggle: false
        })        
        console.log('Did Mount', this.state)
    }

    editHandler = event => {
        event.preventDefault();
        this.setState({
            title: this.state.inputTitle,
            note: this.state.inputNote,
            edittoggle: false
        })
      }

    editToggle = () => {
        let edit = this.state.edittoggle;
        this.setState({ edittoggle: !edit})
      }

    // editSetup = (id) => {
    //     const arr = props.notes;
    //     let singleNote = arr.find(note => note.id.toString() === id);
    //     this.setState({inputTitle: singleNote.title, inputNote: singleNote.note})
    // }



    handleEditChange = event => {
    this.setState({[event.target.name]: event.target.value })
    };

    render() {
        console.log(this.props)
        console.log(this.state)
        return (  
            <div>
                <Link to={`/note/${this.state.id}/edit`} ><Button color="info">EDIT</Button></Link>
                <DeleteModal {...this.props} deleteHandler={this.props.deleteHandler} history={this.props.history}/>
                <Card>
                    <CardBody>
                        <CardTitle>{this.state.title}</CardTitle>
                        <CardText>{this.state.note}</CardText>
                    </CardBody>
                </Card>                          
            </div>            
        );
    }
    
}
 
export default Note;