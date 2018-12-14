import React, {Component} from "react";
import {connect} from "react-redux";
import './index.css';
import {addNote,editNote} from "./Actions"
import './index.css';
import UserForm from "./UserForm"

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
    
      editSubmitHandler = event => {
        event.preventDefault();
            const newObj = {...this.state,_id:this.props._id}

            this.props.history.push('/')
            this.props.editNote({...newObj})
      }

      addSubmitHandler = event => {
            event.preventDefault();
            this.props.history.push('/')
            this.props.addNote(this.state)
      }

    
    render(){
        if(!this.props.edit){
            return(
                <UserForm 
                    change={this.changeHandler} 
                    submit={this.addSubmitHandler} 
                    title={this.state.title}
                    textBody={this.state.textBody}
                    buttonText="Save"
                />
                )
        } else {
            return(
                <UserForm 
                    change={this.changeHandler} 
                    submit={this.editSubmitHandler} 
                    title={this.state.title}
                    textBody={this.state.textBody}
                    buttonText="UPDATE"
                />
            );
        }
    }
}

const mapStateToProps = () => {
    return {}
  }
  
export default connect(mapStateToProps,{addNote,editNote})(Form);