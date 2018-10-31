import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateNote } from '../../actions/index'
import { getNote } from '../../actions/index'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posted: false,
            error: '',
            note: this.props.note,
            newText: '',
        }
    }

    componentDidMount() {
        this.props.getNote()
    }

    handleSubmit(e) {
        e.preventDefault()

        if (!this.state.newText.length) {
            this.setState({ error: 'No text to update' })
            return
        }

        if (this.state.newText === this.state.bodyText) {
            this.setState({ error: "Text hasn't changed!" })
            return
        }
        this.props.updateNote()
    }

    handleChange(e) {
        // Capture new text
        this.setState({ newText: e.target.value })
    }

    handleRemove(e) {
        e.preventDefault()
        this.props.deleteNote()

        this.setState({ posted: true })
    }

    render() {
        return (
            <div className='note-area'>
                <section className='section'>
                    <h3 className='title is-3'>Edit Note</h3>
                    <hr />

                    <form onSubmit={this.handleSubmit}>
                        <p className='control'>
                            <textarea
                                className='textarea'
                                onChange={this.handleChange}
                            />
                            {this.state.error && (
                                <p>
                                    <span className='help is-danger'>{this.state.error}</span>
                                </p>
                            )}
                        </p>

                        <div className='control is-grouped'>
                            <p className='control'>
                                <button onClick={this.handleRemove} className='button is-danger is-outlined'>
                                    Delete
                                </button>
                            </p>
                            <p className='control'>
                                <input className='button is-primary' type='submit' value='Update' />
                            </p>
                        </div>
                    </form>
                </section>

                {this.state.posted && <Redirect to='/' />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posted: state.posted,
        error: state.error,
        note: state.note,
        newText: state.newText,
    }
}

export default connect(mapStateToProps, { updateNote, getNote })(Detail)
