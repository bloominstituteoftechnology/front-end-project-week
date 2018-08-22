import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle} from 'reactstrap';
import NoteFormEdit from './noteformedit';

class Note extends Component {
    state = {
        title: '',
        note: '',
        id: null,
        edittoggle: false
    }
        
    componentDidMount() {
        const note = this.props.notes.filter(note => { 
            console.log(this.props)
            return note.id.toString() === this.props.match.params.id
        })
        console.log(note[0])
        this.setState({
            title: note[0].title,
            note: note[0].note,
            id: note[0].id,
            edittoggle: note[0].edittoggle
        })
    }

    editHandler = event => {
        event.preventDefault();
        this.setState({ title: this.props.title, note: this.props.note})
      }

    editToggle = () => {
        let edit = this.state.edittoggle;
        this.setState({ edittoggle: !edit})
      }

      
    deleteHandler = event => {
        event.preventDefault();
        let notes = this.props.notes.slice();
        notes = notes.filter(item => !item.id)
        this.setState({ notes });
      }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (  
            <div>
                {this.state.edittoggle === false ?
                    <div>
                        <button onClick={this.editToggle}>edit</button>                
                        <button onClick={this.deleteHandler}>delete</button>
                        <Card>
                        <CardBody>
                            <CardTitle>{this.state.title}</CardTitle>
                            <CardText>{this.state.note}</CardText>
                        </CardBody>
                    </Card>  
                    </div>                    
                    :
                    <NoteFormEdit notes={this.state} handleNoteChange={this.props.handleNoteChange} addHandler={this.props.addHandler} Redirect={this.props.Redirect}/>
                }                          
            </div>            
        );
    }
    
}
 
export default Note;