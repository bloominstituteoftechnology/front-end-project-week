import React from "react";
import axios from "axios" ;
import Note from "./Note";
import {Route,Link} from "react-router-dom"
import "./NoteList.css"
import Login from "./Login";

class NoteList extends React.Component{
         constructor(props){

           super(props);

             this.state={
               isLogged : this.loginCheck()
             }

         }
         componentDidMount() {
             // let x = this.loginCheck();
             // console.log("mount...", x)
             // this.setState({isLogged:x});

         }



    updateNote=(id,note)=>{
      axios.put("https://fe-notes.herokuapp.com/note/edit/" +id,note)
          .then (res=>{
              console.log("UPDATE RESPONSE",res);
              //this.setState({notes:res.data})
          })
          .catch (err=>{

              console.log("Error in Update", err) ;

          })

    }

    loginCheck=()=>{
        console.log(localStorage.getItem("user"))
        if(localStorage.getItem("user")){
            this.setState({isLogged: true});
            return true;
        }else{
            this.setState({isLogged: false});
            return false;
        }
    }

    sortHandler=(a,b)=> {
             //a is note1 and b is note2
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        if (titleA > titleB) {
            return +1;

        } else if (titleA < titleB) {
            return -1;
        }

        return 0;
    }



    render(){

             this.props.notes.sort(this.sortHandler);

        console.log("Render...", this.state.isLogged)
        if (this.state.isLogged) {
            return (
                <div>
                    <h3>Your Notes:</h3>
                    {


                        this.props.notes.map(note => {
                            // return <Note key={note._id} note={note}deleteNote={this.deleteNote}
                            //          updateNote={this.updateNote}/>
                            let title = note.title;
                            if (note.title.length > 10) {
                                title = title.substring(0, 10) + "...";
                            }

                            let body = note.textBody;
                            if (body.length > 30) {
                                body = body.substring(0, 30) + " ...";
                            }


                            //console.log("TRimmed:", title, "body",body)
                            return (
                                <div className="content">
                                    <Link className="noteLink" to={`Note/${note._id}`}>

                                        <div className="title">{title} </div>

                                        <hr/>
                                        <div className="body">{body} </div>
                                    </Link>
                                </div>
                            )

                        })

                    }

                </div>
            )
        } else {
            return <Login loginCheck={this.loginCheck}/>;
        }
    }
}

export default NoteList

