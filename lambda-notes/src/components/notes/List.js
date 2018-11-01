import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { getNotes } from '../../actions/index'
import { deleteNote } from '../../actions/index'


class List extends Component {
    componentDidMount() {
        this.props.getNotes()
        this.setState({ notes: this.props.getNotes() })
    }

    render() {
        return (
            <div>
                {this.props.notes.map(note => (
                    <Item
                        key={note._id}
                        id={note._id}
                        title={note.title}
                        textBody={note.textBody}
                        deleteNote={this.props.deleteNote}
                    />
                ))}
                }
            </div>
        )
    }
}

export default connect(null, { getNotes, deleteNote })(List)
