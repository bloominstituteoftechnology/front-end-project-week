import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateNote } from '../../actions/index'
import { getNote } from '../../actions/index'

class Detail extends Component {
   state = {
       posted: false,
        title: '',
        textBody: '',
   }
    componentDidMount() {
        this.props.getNote(this.props.id)
        this.setState({posted: false})
    }

    handleSubmit = e => {
        const { title, textBody } = this.state
        e.preventDefault()
        this.props.updateNote(this.props.id, {title, textBody} )
        this.setState({title: '', textbody: '',  posted: true})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value })
    }

    

    render() {
        return (
            <div className='note-area'>
                <section className='section'>
                    <h3 className='title is-3'>Edit Note</h3>
                    <hr />

                    <form onSubmit={(e) => {this.handleSubmit(e)}}>
                   
                            <input type='text' name='title' placeholder='title' onChange={e=> {this.handleChange(e)}} />
                            <textarea className='textarea' onChange={(e) => {this.handleChange(e)}} />
                         
                     
         
                                <input className='button is-primary' type='submit' value='Update' />
 
                    </form>
                </section>

                {this.state.posted && <Redirect to='/' />}
            </div>
        )
    }
}


export default connect(null, { updateNote, getNote })(Detail)
