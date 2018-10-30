import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchNote, deleteNote, updateNote } from '../actions';
import Note from './Note';
import Edit from './Edit';


 class SingleNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            updateActive: false
        }
    }
    componentDidMount(){
        this.props.fetchNote(this.props.match.params.id);
    }

    toggleUpdate = () => {
        this.setState({updateActive: true});
    }

     render() {
        console.log(this.props.note);
        if (this.props.fetching){
            return (<div></div>)
        }
        return (
            <div>
                <Note title={this.props.note.title} 
                content={this.props.note.textBody} />
                <button onClick={this.toggleUpdate}>Update</button>
                <button onClick={() => this.props.deleteNote(this.props.match.params.id)}>X</button>
                {this.state.updateActive !== false
                    ? <Edit updateNote={this.props.updateNote} id={this.props.match.params.id} />
                    : null
                }
                </div>
        )
    }
}
 const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        fetched: state.fetched,
        note: state.note,
        error: state.error
    }
}
 export default withRouter(connect(mapStateToProps, { fetchNote, deleteNote, updateNote })( SingleNote ))