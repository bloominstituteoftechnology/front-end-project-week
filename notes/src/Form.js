import React, {Component} from "react";
import {connect} from "react-redux";
import './index.css';
import {addNote,editNote,getNotes} from "./Actions"
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

            this.props.history.push('/note-list')
            this.props.editNote({...newObj})
            this.props.getNotes()
            // .then(promise => {
            //     if(promise){
            //         this.props.getNotes()
            //     }
            // })
      }

      addSubmitHandler = event => {
            event.preventDefault();
            this.props.history.push('/note-list')
            this.props.addNote(this.state)
            this.props.getNotes()
            // .then(promise => {
            //     if(promise){
            //         this.props.getNotes()
            //     }
            // })
      }

    
    render(){
        if(!this.props.edit){
            return (
                <UserForm 
                    change={this.changeHandler} 
                    submit={this.addSubmitHandler} 
                    title={this.state.title}
                    textBody={this.state.textBody}
                />
                )
        } else {
            return(
                <UserForm 
                change={this.changeHandler} 
                submit={this.editSubmitHandler} 
                title={this.state.title}
                textBody={this.state.textBody}
            />
            );
        }
    }
}

const mapStateToProps = state => {
    return {notes:state.notes}
  }
  
export default connect(mapStateToProps,{addNote,editNote,getNotes})(Form);