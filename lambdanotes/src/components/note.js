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
            // console.log(note.title)
            return note.id.toString() === this.props.match.params.id
        })
        console.log(note.title)
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

    handleEditChange = event => {
    this.setState({[event.target.name]: event.target.value })
    };

    render() {
        console.log(this.props)
        console.log(this.state)
        return (  
            <div>
                <Link to={`/note/${this.state.id}/edit`}><Button color="info">EDIT</Button></Link>
                <DeleteModal />
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