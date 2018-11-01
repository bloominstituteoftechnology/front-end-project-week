import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateNote } from '../../actions/index'
import { getNote } from '../../actions/index'

class Detail extends Component {
    state = {
        title: '',
        textBody: '',
    }

    componentDidMount() {
        this.props.getNote(this.props.id)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updateNote(this.props.id, this.state)
        this.setState({ title: '', textBody: '' })
        this.props.history.push('/')
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className='note-area'>
                <section className='section'>
                    <h3 className='title is-3'>Edit Note</h3>
                    <hr />

                    <form
                        onSubmit={e => {
                            this.handleSubmit(e, this.props.id)
                        }}
                    >
                        <input
                            type='text'
                            name='title'
                            placeholder='title'
                            onChange={e => {
                                this.handleChange(e)
                            }}
                        />
                        <textarea
                            className='textarea'
                            name='textBody'
                            onChange={e => {
                                this.handleChange(e)
                            }}
                        />

                        <input className='button is-primary' type='submit' value='Update' />
                    </form>
                </section>
            </div>
        )
    }
}

export default connect(null, { updateNote, getNote })(Detail)
