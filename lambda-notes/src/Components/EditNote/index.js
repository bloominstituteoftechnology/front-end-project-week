import React from 'react';
import { Link } from 'react-router-dom';

export class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            body: '',
            id: 0,
            currentNote: {},
            notes: []
        }
    }

    componentDidMount() {
        const newNotes = this.props.notes;
        const newId = Number(this.props.match.params.id);
        const newNote = newNotes.filter((note) => note.id === newId).pop();
        console.log(newNote);
        this.setState({
            notes: newNotes,
            id: newId,
            currentNote: newNote
        });
    }

    handleInputText = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClicked = e => {
        this.props.onSubmit(this.state.title, this.state.body, this.state.id);
    };

    render() {
        return (
            <div className="col-9 right__side">
                <div className="row">
                    <div className="col-3">
                        <h4>Edit Note</h4>
                    </div>
                </div>
                    <div className="row col-4">
                        <form>
                            <input className="note-title" type="text" placeholder="edit title" name="title" onChange={this.handleInputText}/>
                            <input className="note-body" type="textarea" placeholder="edit body" name="body" onChange={this.handleInputText} />
                            <Link to="/">
                                <button className="save" onClick={this.handleClicked}>Update</button>
                            </Link>
                        </form>
                    </div>
            </div>
        )
    }
}
// function handleInputText(e) {
//     this.setState({ [e.target.name]: e.target.value });
// };
// function handleClicked(e) {
//      this.props.onSubmit(this.state.title, this.state.body);;
// };