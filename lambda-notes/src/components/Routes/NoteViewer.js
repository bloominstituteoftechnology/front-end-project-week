import React, { Component } from 'react'
import { connect } from 'react-redux';


class NoteViewer extends Component {

    state = {
        note: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const note = this.props.notes.filter(note => id === note._id.toString())
        this.setState({ note: note[0] })

    }

    render() {
        console.log(this.state)
        const { title, textBody } = this.state.note;
        return (
            <div>
                <div>{title}</div>
                <div>{textBody}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { notes: state.notesReducer.notes };
}

export default connect(mapStateToProps, {})(NoteViewer);
