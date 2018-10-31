import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { addNote } from '../../actions/index'

class New extends Component {
    constructor(props) {
        super(props)
        this.state = { note: { title: '', textBody: '' }, error: '', posted: false }
    }

    handleChange = e => {
        this.setState({ note: { [e.target.name]: e.target.value } })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNote()
    }

    render() {
        return (
            <div className='note-area'>
                <section className='section'>
                    <h3 className='title is-3'>Create Note</h3>
                    <hr />

                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='title' placeholder='title' onChange={this.handleChange} />
                        <p className='control'>
                            <textarea className='textarea' name='bodyText' onChange={this.handleChange} />
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
    error: this.state.error,
    posted: this.state.posted,
    note: this.state.note,
})

export default connect(mapStateToProps, { addNote })(New)
