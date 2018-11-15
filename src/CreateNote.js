import React from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions/index';



class CreateNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            textBody: ''
        }
    }



    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            textBody: ''
        })
        this.props.history.push('/notes');
    }

    render(){
        return(
            <div>
                <h1>Create New Note:</h1>

                <form onSubmit={this.submitHandler} >
                    <input onChange={this.inputHandler} type="text" value={this.state.title} name="title" placeholder="Note Title" />
                    <input onChange={this.inputHandler} type="text" value={this.state.text} name="textBody" placeholder="Note Content" />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}


export default connect( ()=>({}), { addNote })(CreateNote); 
