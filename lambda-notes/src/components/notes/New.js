import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateNote } from '../../actions/index'

class New extends Component {
    constructor(props) {
        super(props)
        this.state = { textBody: '', error: '', posted: false }
    }

    handleChange = e => {
        this.setState({ textBody: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (!this.state.textBody) {
            this.setState({ error: 'Nothing to submit!' })
        } else {
            this.props.updateNote()
        }
    }

    render() {
        return (
            <div className='note-area'>
                <section className='section'>
                    <h3 className='title is-3'>Create Note</h3>
                    <hr />

                    <form onSubmit={this.handleSubmit}>
                        <p className='control'>
                            <textarea className='textarea' onChange={this.handleChange} />
                            {this.state.error && (
                                <p>
                                    <span className='help is-danger'>{this.state.error}</span>
                                </p>
                            )}
                        </p>

                        <div className='control is-grouped'>
                            <p className='control'>
                                <input className='button is-primary' type='submit' value='Save' />
                            </p>
                        </div>
                    </form>

                    {this.state.posted && <Redirect to='/' />}
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posted: state.posted,
    error: state.error,
    textBody: state.textBody,
})

export default connect(mapStateToProps, { updateNote })(New)
