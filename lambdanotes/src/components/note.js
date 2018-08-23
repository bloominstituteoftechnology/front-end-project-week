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

    handleEditChange = event => {
    this.setState({[event.target.name]: event.target.value })
    };

    render() {
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