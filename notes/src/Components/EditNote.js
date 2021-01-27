import React from 'react';
import axios from 'axios';

//const url = process.env.REACT_APP_LOCAL_URL;
const url = process.env.REACT_APP_DEPLOY_URL;
class EditNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            content : '',
            isMounted:false
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }

    componentDidMount() {
        console.log(this.props.match.params.id, " -----this.props.match.params.id")
        axios
            .get(`${url}/api/notes/${this.props.match.params.id}`)
            .then(response =>{ 
                        console.log("Editnote   :  ",response.data.title, response.data[0].content)
                        this.setState({ title : response.data[0].title, content : response.data[0].content})
                        console.log("After response to state --- ",this.state) }
             )
            .catch(error => console.log(error));
    }

    editNote = () => {
        const editedNote = {
            title : this.state.title,
            content : this.state.content
        }
        //this.setState({title : '', content : ''});
        axios
            .put(`${url}/api/notes/${this.props.match.params.id}`, editedNote)
            .then(response => this.props.history.push('/notes'))
            .catch(error => console.log(error));
    }
    
    render() {
        console.log("in editnote -- " ,this.state)
        return (
            <div className = "create-note-main-div">
                <h3>Editing....</h3>

                <div className = "form">
                    
                    <input name = 'title'
                           type = 'text' 
                           placeholder = {this.state.title}
                           value = {this.state.title}
                           onChange={this.handleInputChange}
                    />

                    <textarea name = 'content' 
                           type = 'text'
                           placeholder = {this.state.content}
                           value = {this.state.content} 
                           onChange = {this.handleInputChange}
                    />

                    <button onClick = {this.editNote}> Save </button>
                </div>
            </div>
        )
    }
}

export default EditNote;