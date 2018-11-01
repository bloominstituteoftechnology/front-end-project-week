import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './notestyles/notes.css'
import { deleteNote } from '../../actions/index'
import { connect } from 'react-redux'


class Item extends Component {
    render() {
        return (
            <ul>
                <li className='note-item'>
                    <div className='card'>
                        <header className='card-header'>
                            <p className='card-header-title'>{this.props.title}</p>
                        </header>

                        <div className='card-content'>
                            <div className='content'>{this.props.textBody}</div>
                        </div>

                        <footer className='card-footer'>
                            <Link to={`notes/${this.props.id}`} className='card-footer-item'>
                                Edit
                            </Link>
                            <button
                                onClick={() => {
                                    this.props.deleteNote(this.props.id)
                                }}
                                className='card-footer-item'
                            >
                               <Link to='/'> Delete </Link>
                            </button>
                        </footer>
                    </div>
                </li>
            </ul>
        )
    }
}

export default connect(null, { deleteNote })(Item)
