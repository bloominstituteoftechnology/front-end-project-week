import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { editNote } from '../../actions';
    
    
    const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}

class EditNote extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentWillMount() {
        let routeId = this.props.match.params.id;
        let matched = this.props.notesArray.filter((item) => item._id === routeId);
        this.setState({matched})
    }
    handleUpdate = () => {
        this.props.editNote(this.state.matched[0]);
        this.props.history.push('/');
    }
    handleChange = (e) => {
        let temp = Array.from(this.state.matched);
        temp[0][e.target.name] = e.target.value;
        this.setState({ matched: temp });
    }
    
    render() {
        return (
            <div className='noteView_container'>
               <div className='noteView_topContent'>
                    <h3 className='content_header'>
                        Edit Note:
                        </h3>
                </div>
                <div className='createNote_form'>
                    <input
                        type="text"
                        className='createNote_title'
                        name='title'
                        value={this.state.matched[0].title}
                        onChange={this.handleChange}
                    />
                    <textarea
                        className='createNote_body'
                        name='body'
                        rows="20"
                        onChange={this.handleChange}
                    />
                    <div
                 
                        className='nav_button CreateNote_button'
                        onClick={this.handleUpdate}
                    >Update</div>    

                </div>
            </div>





        )
    }
}


export default connect(mapStateToProps,{editNote}) (EditNote);