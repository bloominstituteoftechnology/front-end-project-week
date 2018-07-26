import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CreateNoteFormContainerStyledDiv, CreateNoteStyledForm, CreateNoteStyledTextarea, CreateNoteStyledInput } from './CreateNoteForm';


// class EditNote extends Component {
//     constructor(props) {
//         super(props); 
//         this.state = {
//             note:null
//         }
//     }

//     componentDidMount() {
//         const id = this.props.match.match.params.id-1;
//         this.setState({note:this.props.noteEntries[id]}) 
//     }
// }

const EditNote = props => {
    return (
        <CreateNoteFormContainerStyledDiv>
            <h2>Edit Note:</h2>
            <CreateNoteStyledForm>
                <CreateNoteStyledInput
                    type="text"
                    placeholder="Note Title"
                    name="title"
                    onChange={props.createNoteTitleHandler}
                    defaultValue={props.noteEntries[props.match.match.params.id-1].title}
                />
                <CreateNoteStyledTextarea
                    type="text"
                    placeholder="Note Content"
                    name="content"
                    onChange={props.createNoteTextBodyHandler}
                    defaultValue={props.noteEntries[props.match.match.params.id-1].textBody}
                />
            </CreateNoteStyledForm>


            <Link to={`/note/${props.match.match.params.id}`}>  {/*TOO HACKY!!! */}
                {/* <button onClick={props.editNoteEntry(props.match.match.params.id)}> */}
                <button onClick={(e) => props.editNoteEntry(e,props.match.match.params.id)}>
                    <Link to={`/note/${props.match.match.params.id}`}>
                        UPDATE
                    </Link>
                </button>
            </Link>


        </CreateNoteFormContainerStyledDiv>
    );
}

export default EditNote