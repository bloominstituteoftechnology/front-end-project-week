import React, {Component} from "react";
import {connect} from "react-redux";
import './index.css';
import {addNote,editNote,getNotes} from "./Actions"
import './index.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
          title:(props.title ? props.title : ""),
          textBody: (props.textBody ? props.textBody : "")
        }
      }
      changeHandler = event => {
        this.setState({
          [event.target.name]:event.target.value
        })
      }
    
      submitHandler = event => {
        event.preventDefault();
        if(this.props.edit){
            const newObj = {...this.state,_id:this.props._id}

            this.props.history.push('/')
            this.props.editNote({...newObj})
            .then(promise => {
                if(promise){
                    this.props.getNotes()
                }
            })
        } else {
            this.props.history.push('/')
            this.props.addNote(this.state)
            .then(promise => {
                if(promise){
                    this.props.getNotes()
                }
            })
        }
      }

    
    render(){
        return(
            <form className="form" action="#" onSubmit={this.submitHandler}>
                Title: <input className="title-input" name="title" onChange={this.changeHandler} value={this.state.title} required/>
                Message: <textarea className="message-input" rows={30} name="textBody" onChange={this.changeHandler} value={this.state.textBody} required/>
                <button className="submit-button" type="submit">{this.props.edit ? "Edit Note" : "Add Note"}</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {notes:state.notes}
  }
  
export default connect(mapStateToProps,{addNote,editNote,getNotes})(Form);