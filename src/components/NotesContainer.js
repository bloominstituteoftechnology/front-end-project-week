import React, { Component } from 'react';
import './NotesContainer.css'
import axios from 'axios';

    class NotesContainer extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                title: "",
                textBody: "",
            }
          }
        
          inputHandler = (e) => {
            this.setState({[e.target.name] : e.target.value})
          }
        
          submitHandler = (e) => {
            e.preventDefault()
            axios.post(`https://fe-notes.herokuapp.com/note/create`, this.state)
              .then(response => {console.log(response)})
              .catch(err => {console.log(err)})
          }
        
          render(){
            return (
                <div >
                    <h1>Create New Note:</h1>
                  <form className="CreateForm" onSubmit={this.submitHandler}>
                        <input
                        id="title"
                        name="title"
                        placeholder="Note Title"
                        onChange= {this.inputHandler}
                        />
                        
                        <textarea
                        id="textBody"
                        name="textBody"
                        placeholder="Note Content"
                        onChange= {this.inputHandler}
                      />
                      <button className="btn" type="submit">Save</button>
                  </form>
                </div>
            )
          }
        }
        
export default NotesContainer;