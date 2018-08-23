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
        Redirect: false
    }
   
    componentDidMount() {
        const note = this.props.notes.filter(note => {
            return note.id.toString() === this.props.match.params.id
        })
        console.log(note[0])
        this.setState({
            title: note[0].title,
            note: note[0].note,
            id: note[0].id,
            edittoggle: false
        })
    }

    editHandler = event => {
        event.preventDefault();
        this.setState({
            title: this.state.title,
            note: this.state.note,
            edittoggle: false,
            Redirect: true },() => {
                this.setState({Redirect: false})
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
                {this.state.edittoggle === false ?
                    <div>
                        <Button color="info" onClick={this.editToggle}>EDIT</Button>
                        <DeleteModal {...this.props} deleteHandler={this.props.deleteHandler} history={this.props.history}/>
                        <Card>
                            <CardBody>
                                <CardTitle>{this.state.title}</CardTitle>
                                <CardText>{this.state.note}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    :
                    <NoteFormEdit notes={this.state} handleEditChange={this.handleEditChange} editHandler={this.editHandler} editToggle={this.editToggle} Redirect={this.props.Redirect}/>
            }
                
            </div>
        );
    }
    
}
 
export default Note;