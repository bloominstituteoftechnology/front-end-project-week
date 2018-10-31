import React, { Component } from 'react'
import { addNote } from '../../actions/index'
import { connect } from 'react-redux'

class New extends Component {
    constructor(props) {
        super(props)
        this.state = {title: '', textBody: ''}
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNote(this.state)
        this.setState({
            title: '',
            textBody: '',
        })
        
    }

    render() {
        return (
            <div className='note-area'>
                <section className='section'>
                    <h3 className='title is-3'>Create Note</h3>
                    <hr />

                    <form
                        onSubmit={e => {
                            this.handleSubmit(e)
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
                            name='bodyText'
                            onChange={e => {
                                this.handleChange(e)
                            }}
                        />
                        <div className='control is-grouped'>
                            <input className='button is-primary' type='submit' value='Save' />
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default connect(null, { addNote })(New)
