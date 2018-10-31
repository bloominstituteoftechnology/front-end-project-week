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
                {
                    this.props.gettingNotes ? <ul className='note-list'>
                        {this.props.notes.map(note => (
                            <Item key={note._id} id={note._id} title={note.title} body={note.textBody} />
                        ))}
                    </ul> :
                    <div className='container has-text-centered'>
                        <p style={{ margin: '1rem' }}>
                            <strong>Looks like there are no notes. You should create some!</strong>
                        </p>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        fetchedInitial: state.fetchedInitial,
    }
}

export default connect(mapStateToProps, { getNotes })(List)
