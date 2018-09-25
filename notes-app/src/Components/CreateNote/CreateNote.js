import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/index';
import './index.css';



const mapStateToProps = (state) => {
    return {
        notes: state
    }
}

class CreateNote extends Component {
    constructor(){
        super();
        this.state = {
            notes: [],
        }
    }

    componentWillMount(){
        let routeId = this.props.match.params.id;
        let matched = this.props.notes.filter((item)=>item._id === routeId)
        this.setState({ matched })
    }

    handleUpdate = () => {
        //action 2/3
        this.props.createNote(this.state.matched[0]);
        this.props.history.push('/');
    }

    handleChange = (event) => {
        console.log(event.target.name)
        let temp = Array.from(this.props.notes);
        temp[0][event.target.name] = event.target.value;
        console.log(temp[0]);
        this.setState({ notes: temp })
    }

    render() {
        return (
            <div className='create_view'>
                <form className="create_form">
                    <h3 className="create_header">Create New Note: </h3>
                    <br />
                    <input 
                        className="create_title" 
                        type="text" 
                        placeholder="Note Title"
                        
                        onChange={this.handleChange}
                        name="title"
                    />
                    <input 
                        type="number"
                        name="_id"
                        onChange={this.handleChange}
                        placeholder="id?"
                    />
                    <br /><br />
                    <textarea 
                        className="create_content" 
                        rows="20" 
                        placeholder="Note Content"
                        
                        onChange={this.handleChange}
                        name="textBody"
                    />
                        <br />
                    <button 
                    className="create_button"
                    onClick={this.handleUpdate}>Save</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, {createNote})(CreateNote);