import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

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
    deleteNote = (e) => {
        const id = this.state.id;
        axios
            .delete(`${process.env.REACT_APP_API}/notes/${id}`)
            .then(response => {
                this.props.history.push('/')
                this.setState({ id: null })
                this.props.handleRefresh()
                this.props.toggleDeleting()
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
                            <div onClick={this.deleteNote} className='delete-btn'>Delete</div>
                            <div onClick={this.props.toggleDeleting} className='no-btn'>No</div> 
                        </div>
                    </div>
                </div>
            </div>
        );    
    }
}
 
export default withRouter(DeleteNote);