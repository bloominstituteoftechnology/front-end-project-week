import React, {Component} from 'react';

class CreateNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            text: ''
        }
    }

    handleInput = event=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event=>{
        event.preventDefault();
        console.log('Send object back to App and set page back to default');
        
        // Sets path back to default
        this.props.history.goBack();
    }

    render(){
        return(
            <div>
                <h2>Create New Note:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} placeholder="Note Title" onChange={this.handleInput}/>
                    <input type="text" name="text" value={this.state.text} placeholder="Note Content" onChange={this.handleInput}/>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default CreateNote;