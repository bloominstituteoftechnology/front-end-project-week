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
                <div className="delete-align">
                    <div className='delete-content'>
                        <p>Are you sure you want to delete this?</p>
                        <div className='delete-btns'>
                            <div onClick={this.deleteCompleted} className='delete-btn'>Delete</div>
                            <div onClick={this.props.toggleDeleting} className='no-btn'>No</div> 
                        </div>
                           
                    </div>
                </div>
            </div>
        );    
    }
}
 
export default DeleteNote;