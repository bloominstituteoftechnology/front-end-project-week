import React, { Component } from "react";
import { Axios } from 'axios';

class EditNotes extends Component {
    state = {
        notes: [],
        note: ""
    };

    handleSetData = data => this.setState({ notes: data });

    componentDidMount() {
        Axios
         .get("http://localhost:8000/notes")
         .then(response => {
             console.log("GET RESPONSE: ", response);
             this.setState({notes: response.data});
         })
         .catch(err => {
             console.log(err);
         });
    }

    render(){
            return (
                <div>
                    <h2>Edit Notes:</h2>
                    <form>
                        <input
                            type='text'
                            placeholder="Enter Title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            name='title'
                        />
                        <div>
                            <textarea 
                            type='text'
                            placeholder='Enter Notes'
                            value={this.state.content}
                            onChange={this.handleChange}
                            name='noteBody'
                            />
                        </div>
                    </form>
                </div>
                    )
            }
};

export default EditNotes;
