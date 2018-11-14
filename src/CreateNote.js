import React from 'react';
import { connect } from 'react-redux';

class CreateNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            text: '',
            timestamp: '',
            tags: [],
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>CreateNew Note:</h1>

                <form onSubmit={this.submitHandler} >
                    <input onChange={this.inputHandler} type="text" value={this.state.title} name="title" placeholder="Note Title" />
                    <input onChange={this.inputHandler} type="text" value={this.state.text} name="text" placeholder="Note Content" />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        notes: state.notes,
    }
};

export default connect(mapStateToProps)(CreateNote); 
