import React, {Component} from "react";
import {connect} from "react-redux";
import './index.css';
import {addNote} from "./Actions"
import './index.css';

class Form extends Component {
    constructor(){
        super();
        this.state = {
          title:"",
          message:""
        }
      }
      changeHandler = event => {
        this.setState({
          [event.target.name]:event.target.value
        })
      }
    
      submitHandler = event => {
        event.preventDefault();
        this.props.addNote(this.state)
        this.setState({
          title:"",
          message:""
        })
      }


    render(){
        return(
            <form className="form" action="#" onSubmit={this.submitHandler}>
                Title: <input className="title-input" name="title" onChange={this.changeHandler} value={this.state.title} required/>
                Message: <textarea className="message-input" rows={30} name="message" onChange={this.changeHandler} value={this.state.message} required/>
                <button className="submit-button" type="submit">Add Note</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {notes:state.notes}
  }
  
export default connect(mapStateToProps,{addNote})(Form);