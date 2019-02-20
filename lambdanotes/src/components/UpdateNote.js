import React from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getNotes, updateNote } from '../actions/noteAction'

class UpdateNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            textBody: '',
            tags: '',
        }
    }

   

    componentDidMount(){
        const id = this.props.match.params.id
        axios
        .get(`http://localhost:3000/notes/${id}`)
        .then(response => {
            const {title, textBody, tags} = response.data
            this.setState({ title, textBody, tags })
            console.log(id)
            // this.setState({ note: response.data })
        })
        .catch(err => {
            console.log("Fail to Get INDIVIDUAL note", err)
        })
    }

   

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
        console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();
        //this.props.handleUpdateNote({...this.state, id: this.props.match.params.id})
        this.props.updateNote({...this.state, id: this.props.match.params.id})
        console.log(this.state)
    }


    render(){
        return (
            <div className="note-container">
            <h2> Edit Note: </h2>
                <form>
                    <input 
                        className="input-title"
                        placeholder="Note Title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <textarea 
                        className="input-content"
                        placeholder="Note Content"
                        type="text"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.handleChange}
                    />
                    <input 
                        className="input-title"
                        placeholder="Note Tags"
                        type="text"
                        name="tags"
                        value={this.state.tags}
                        onChange={this.handleChange}
                    />
                </form>
                <div className="button save" onClick={this.handleSubmit}><Link to="/idsort" >Update</Link></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, { getNotes, updateNote })(UpdateNote)
//export default UpdateNote