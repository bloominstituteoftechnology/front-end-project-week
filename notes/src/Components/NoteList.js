import React from "react";
import axios from "axios" ;
import Note from "./Note"

class NoteList extends React.Component{
         constructor(props){

           super(props);

           this.state={
                notes:[]
           }

         }
         componentDidMount() {
             axios.get("https://fe-notes.herokuapp.com/note/get/all")
                 .then(res=> {
                     console.log("GET DATA", res);
                     this.setState({notes: res.data})
                 })

                 .catch (err=>{

                           console.log("Error in get", err) ;

                 })

         }

    deleteNote=(id)=>{

        axios.delete("https://fe-notes.herokuapp.com/note/delete/" +id)
            .then(res=>{
                console.log("DELETE NOTE",res);
                if(res.data.success==="Note successfully deleted"){

                    let newNotes=this.state.notes.filter(note=>{
                        return (note._id != id)
                    })
                    this.setState({notes:newNotes})
                }



            })
            .catch(err=>{
                console.log("DELETE Error",err);
            })
    }


    render(){
        return(
           <div>
               {
                  this.state.notes.map(note=>{
                    return <Note key={note._id} note={note}deleteNote={this.deleteNote} />
                  })

               }

           </div>
        )
    }
}

export default NoteList