import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { getNotes } from '../../actions/index'

class List extends Component {
    componentDidMount() {
        this.props.getNotes()
    }

    render() {
        return (
            <div>
                {this.props.notes.map(note => (
                    <Item key={note._id} id={note._id} title={note.title} textBody={note.textBody} />
                ))}
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        note: state.note,

    }
}

export default connect(mapStateToProps, { getNotes })(List)
