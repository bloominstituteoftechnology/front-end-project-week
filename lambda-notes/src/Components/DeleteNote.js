import React from 'react';

class DeleteNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.handleSetCurrent(id);
    }
    deleteCompleted = () => {this.props.handleDeleteNote(this.props.match.params.id)}
    
    render() {
        return (
            <div className='delete-note'>
                <div className="delete-content">
                    <p>Are you sure you want to delete this?</p>
                    <div onClick={this.deleteCompleted}>Delete</div>
                    <div onClick={this.props.toggleDeleting}>No</div>
                </div>
            </div>
        );    
    }
}
 
export default DeleteNote;