import React from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

class UpdateNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            textBody: '',
            note: {},
        }
    }

    // componentDidMount(){
    //     const id = this.props.match.params.id
    //     axios
    //     .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    //     .then(response => {
    //         this.setState({ note: response.data })
    //     })
    //     .catch(err => {
    //         console.log("Fail to Edit individual note", err)
    //     })
    // }

    componentDidMount(){
        console.log(this.props.notes)
        console.log(this.props.match)
        const { notes, match } = this.props 
        const note = this.props.notes.find( item => item.id === Number(this.props.match.params.id))
        this.setState({note})
        console.log(this.props.match.params.id)
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleUpdateNote(this.state)
    }


    render(){
        return (
            <div>
                <form>
                    <input 
                        placeholder="Note Title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder="Note Content"
                        type="text"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.handleChange}
                    />
                </form>
                <div onClick={this.handleSubmit}><Link to="/notes" >Update</Link></div>
            </div>
        )
    }
}

export default UpdateNote