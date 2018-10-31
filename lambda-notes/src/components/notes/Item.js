import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteNote } from '../../actions/index'

class Item extends Component {
    handleRemove = id => {
        this.props.deleteNote(id)
    }

    render() {
        return (
            <li className='note-item'>
                <div className='card'>
                    <header className='card-header'>
                        <p className='card-header-title'>{this.props.note.title}</p>
                    </header>

                    <div className='card-content'>
                        <div className='content'>
                            {
                                this.props.body.length > 140 ? this.props.body.substring(0, 140) + ' ...' :
                                this.props.body}
                        </div>
                    </div>

                    <footer className='card-footer'>
                        <Link to={`notes/${this.props._id}`} className='card-footer-item'>
                            Edit
                        </Link>
                        <button onClick={this.handleRemove} className='card-footer-item'>
                            Delete
                        </button>
                    </footer>
                </div>
            </li>
        )
    }
}

export default connect({ deleteNote })(Item)
