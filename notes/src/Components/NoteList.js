import React from "react";
import axios from "axios" ;
import Note from "./Note";
import {Route,Link} from "react-router-dom"
import "./note.css"

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
                     // let notes=res.data;//res.data is the array we get all the data from server
                     // let newNotes=this.state.notes.filter(note=>{
                     //     for(let i=0;i<notes.tags.length;i++){
                     //         if (notes.tags[i]==="Arpita") {
                     //             return true;
                     //         }
                     //     }
                     //     return false;
                     // })

                     this.setState({notes: res.data})
                 })

                 .catch (err=>{

                           console.log("Error in get", err) ;

                 })

         }


    updateNote=(id,note)=>{
      axios.put("https://fe-notes.herokuapp.com/note/edit/" +id,note)
          .then (res=>{
              console.log("UPDATE RESPONSE",res);
              //this.setState({notes:res.data})
          })

   }


    render(){
        return(
           <div>
               <h3>Your Notes</h3>
               {
                  this.state.notes.map(note=>{
                    // return <Note key={note._id} note={note}deleteNote={this.deleteNote}
                    //          updateNote={this.updateNote}/>
                      return (
                            <Link className="noteLink" to={`Note/${note._id}`}>

                                <div>{note.title} </div>

                                <hr/>
                                <div>{note.textBody.substr(0, 100)} </div>
                            </Link>

                  )

                  })

               }

           </div>
        )
    }
}

export default NoteList

