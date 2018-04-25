import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Edit extends Component {
    state={
        title: '',
        text: ''
    }

    
    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit = () => {
 this.setState({
        title: this.state.title,
        text: this.state.text
    })
        this.props.history.push("/note");
    }
    render() {
        console.log(this.props.history)
        return (
<div>

  <input 
  value={this.state.title}
type='text'
name="title"
placeholder="Note Title Here"
onChange={this.handleTextInput}

/>

 <input 
value={this.state.text}
type='text'
name="text"
placeholder="Note Text Here"
onChange={this.handleTextInput}

/>
<Link to="/"> <button onClick={this.handleSubmit} type="submit">Update Note</button></Link>

    </div>

        )
    }

}

export default withRouter(Edit);