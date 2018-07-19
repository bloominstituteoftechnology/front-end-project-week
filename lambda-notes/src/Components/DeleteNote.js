import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DeleteNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ id: id })
    }
    deleteNote = () => {
        const id = this.state.id;
        axios
            .delete(`http://localhost:3333/notes/${id}`)
            .then(response => {
                console.log('DELETE RESPONSE: ', response)
                this.setState({ id: null })
                this.props.handleSetData(response.data)
            })
            .catch(err => {console.log(err)})
    }
    render() {
        return (
            <div className='delete-note'>
                <div className="delete-align">
                    <div className='delete-content'>
                        <p>Are you sure you want to delete this?</p>
                        <div className='delete-btns'>
                            <div onClick={this.deleteNote} className='delete-btn'><Link className='link' to='/'>Delete</Link></div>
                            <div onClick={this.props.toggleDeleting} className='no-btn'>No</div> 
                        </div>
                    </div>
                </div>
            </div>
        );    
    }
}
 
export default DeleteNote;