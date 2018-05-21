import React, { Component } from 'react';
 
class CreateNote extends Component{
    constructor(){
        super()
        this.state = {
            title: "",
            content: ""
        }
    }

    handleInputChnage = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]:e.target.value})
    }

    render() {
        return(
            <div>
                <form>
                    <label>
                        Title:
                        <input name="name" value={this.state.title} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Content:
                        <input name="name" value={this.state.content} onChange={this.handleInputChange} />
                    </label>
                </form>
            </div>
        )
    }
}

export default CreateNote;