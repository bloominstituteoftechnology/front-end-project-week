import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';

//action 1/3
import { editNote } from '../../actions/index';

const mapStateToProps = (state) => {
    return {
        notes: state
    }
}

class EditNote extends Component {
    constructor(){
        super();
        this.state = {
            matched: [],
        }
    }

    componentWillMount(){
        let routeId = this.props.match.params.id;
        let matched = this.props.notes.filter((item)=>item._id === routeId)
        this.setState({ matched })
    }

    handleUpdate = () => {
        //action 2/3
        this.props.editNote(this.state.matched[0]);
        this.props.history.push('/');
    }

    handleChange = (event) => {
        console.log(event.target.name)
        let temp = Array.from(this.state.matched);
        temp[0][event.target.name] = event.target.value;
        this.setState({ matched: temp })
    }

    cancelButton = () => {
        window.location.reload();
    }



    render() {
        return (
            <div className='edit_view'>
                <form className="edit_form">
                        <br /><br />
                <h3 className="edit_header">Edit Note: </h3>

                        <br />

                    <input 
                        className="edit_title" 
                        type="text" 
                        onChange={this.handleChange}
                        value={this.state.matched[0].title}
                        name='title'
                    />

                            <br /><br />

                    <textarea 
                        className="edit_content" 
                        rows="20" 
                        onChange={this.handleChange} 
                        value={this.state.matched[0].textBody}
                        name='textBody'
                    />
                    
                    <br />

                    <button 
                        className="edit_button"
                        onClick={this.handleUpdate}
                        
                            >Update
                    </button>
                    <button 
                        className="cancel_button"
                        onClick={this.cancelButton}
                        
                            >Undo Changes
                    </button>

                </form>
            </div>
        )
    }
}

//action 3/3
export default connect(mapStateToProps, {editNote})(EditNote);

