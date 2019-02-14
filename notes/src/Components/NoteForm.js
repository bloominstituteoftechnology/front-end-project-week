import React from "react";

class NoteForm extends React.Component{
           constructor(props){
            super(props);
             this.state={

                 "tags": ["Arpita"],
                 "title": "",
                 "textBody": ""

             }


           }

    changeHandler=event=> {
        event.preventDefault();

       this.setState({[event.target.name]:event.target.value})

    }

   clickHandler=event =>{
     event.preventDefault();
       let newNote={
           "tags":this.state.tags,
           "title":this.state.title,
           "textBody":this.state.textBody
       }
       this.props.createFunc(newNote)
     this.setState({tags:[],title:"",textBody:""})



   }


  render(){
      return (
       <form>
       <input type="text" name="tags" value ={this.state.tags}onChange={this.changeHandler}/>
       <input type="text" name="title" value ={this.state.title}placeholder="Note Title"
              onChange={this.changeHandler}/>

       <input type="text" name="textBody" placeholder="Note Content"
              value ={this.state.textBody} onChange={this.changeHandler}/>
        <button onClick={this.clickHandler}>Save</button>


       </form>


      );



  }


}
export default NoteForm