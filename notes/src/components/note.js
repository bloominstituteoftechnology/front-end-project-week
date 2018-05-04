import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, getNotes } from '../actions';


class Notes extends Component {
    //do I need state or constructor state?
    state = {
        title: '',
        body: '',
    }
//not working need to get it to map

    handleChange = (event) => {
        this.setState({[e.target.name]: event.target.value})
    }
 
    handleSubmit = () => {
        const note = {
            title: this.state.title,
            body: this.state.body,
            // might not need an id, I will be using index keys
            id: this.props.notes.length,
        }
        this.props.addNote(note);
        this.setState({title: '', body: ''});

    }
        render() {
            return(                                        
                <div>
                    {this.props.notes.title} {this.props.notes.body}
                        {/* {this.props.notes.map((note, i) => {
                            return (
                                <div key={i}>
                                {note.title}{note.body}
                                </div>


                            )
                        } )} */}


                </div>



            )




        }

}
const mapStateToProps = (state) => {
    return {
        notes: state,
        // fetching: state
    }
}

export default connect(mapStateToProps, {addNote, getNotes})(Notes)