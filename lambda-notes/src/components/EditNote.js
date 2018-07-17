import React from 'react';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            id:null,
            notes: []
        }
    }

    componentDidMount() {
        const id= this.props.match.params.id;
        this.props.handleSetCurrent(id);
    }

    render() {
        return (
            <form>
                <input
                value={this.props.currentNote.title}
                onChange={this.props.handleEditTitle}
                />

                <input
                value={this.props.currentNote.content}
                onChange={this.props.handleEditContent}
                />
                <div onClick={this.props.handleEditNote}>Update</div>
            </form>
        )
    }
}

export default EditNote;