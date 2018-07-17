import React from 'react';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: []
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.handleSetCurrent(id);
    }
    render() {
        return (
            <form className="edit-note">
                <h1>Edit New Note:</h1>
                <input
                    name='titleValue'
                    value={this.props.currentNote.title}
                    onChange={this.props.handleEditTitle}
                />
                <textarea
                    name='contentValue'
                    value={this.props.currentNote.content}
                    onChange={this.props.handleEditContent}
                />
                <div onClick={this.props.handleEditNote} className="custom-button">
                    Update
                </div>
            </form>
        );    
    }
}
 
export default EditNote;