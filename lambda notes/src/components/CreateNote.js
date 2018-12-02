import React from "react";

class CreateNote extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         title: "",
         text: "",

      }
   }

   render(){
      return (
         <div>
            <h2>Create New Note</h2>
            <form>
               <input 
                  name="title"
                  placeholder="Note Title"
               />
               <input 
                  name="text"
                  placeholder="Note Title"
               />
               <button type="submit">Save</button>
            </form>
         </div>
      )
   }
}

export default CreateNote;