import React, {Component} from 'react';
import { Card, CardText, CardBody, CardTitle} from 'reactstrap';
import NoteForm from './noteform';
import { render } from 'react-dom';

class Note extends Component {
    state = {
        title: '',
        note: '',
        id: null,
        edittoggle: null
    }
        
    componentDidMount() {
        const note = this.props.notes.filter(note => { 
            console.log(note)
            return note.id.toString() === this.props.match.params.id
        })
        console.log(note[0].title)
        this.setState({
            title: note[0].title,
            note: note[0].note,
            id: note[0].id,
            edittoggle: note[0].edittoggle
        })
    }

    render() {
        return (  
            <div>
                {/* {props.notes.edittoggle ? 
                <NoteForm btntext="Update"/> 
                :  */}
                <Card>
                    <CardBody>
                        <CardTitle>{this.state.title}</CardTitle>
                        <CardText>{this.state.note}</CardText>
                    </CardBody>
                </Card>
                {/* } */}               
            </div>            
        );
    }
    
}
 
export default Note;