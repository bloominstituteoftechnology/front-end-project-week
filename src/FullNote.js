import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from './actions/index';
import { withRouter } from 'react-router-dom';

class FullNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            note: [],
        }
    }

    componentDidMount(){
        const note = this.props.notes.find(item=> `${item._id}` === this.props.match.params.id);
        this.setState({
            note: note,
        })
    }

    deleter = (e) => {
        this.props.deleteNote(this.state.note._id)
        setTimeout(()=>{this.props.history.push('/notes')}, 1000)
    }

    updateRoute = (e) => {
        this.props.history.push(`/notes/edit/${this.state.note._id}`)
    }

    render(){
        if(!this.state.note) return null;
        return(
            <div>
                <h3 onClick={this.updateRoute}>edit</h3>
                <h3 onClick={this.deleter}>delete</h3>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
};

export default withRouter(connect(mapStateToProps, { deleteNote })(FullNote));