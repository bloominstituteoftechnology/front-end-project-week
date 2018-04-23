import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
   
      downloadNotes = () => {
         

         let rows = this.props.notes;
         
         let csvContent = "";

         for(let i = 0; i < rows.length; i++) {
            if(i === 0){
               let titleBar = "Note Title, Note Content \n"
               csvContent += titleBar;
            }

            let object = rows[i];
            let title = object.title;
            let content = object.content;
            if(title.indexOf(",") !== -1) title = title.replace(",", ";");
            while(content.indexOf(",") !== -1){
               content = content.replace(",", ';');
            } 


            let row = title + "," + content;

            csvContent += row + "\r\n\n";
         }


         // window.open(encodedUri);

         let blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
         let link = document.createElement("a");
         if(link.download !== undefined) {
            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "export.csv");
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
         }
         
      }

   render() {
      return (
         <div className="navbar">
            <h1 className="navbarTitle">
               Lambda
               <br/>Notes
            </h1>
            <Link to="/">
               <button className="viewNotesButton" >
               <h3>View Your Notes</h3>
               </button>
               </Link>
               <Link to="/newNote">
               <button className="createNoteButton">
               <h3>+ Create New Note</h3>
               </button>
               </Link>
               <div>
               <button className="downloadButton" onClick={this.downloadNotes} >
               <h3> Download Notes</h3>
               </button>
               <Link to="/">
               <button id="returnToLogin" onClick={() => this.props.returnToLogin()} >
               <h3>Return To Login</h3>
               </button>
               </Link>
               </div>
         </div>
      )
   }
}

export default Navbar;