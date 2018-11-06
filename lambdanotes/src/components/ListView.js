import React, { Component } from 'react';
import './ListView.css';

// class ListView extends Component {
//     constructor(props) {
//         super(); 
//     }

//     render() {
//         return (
//             {props.notesData.map(note => {
//                 <div>
//                     <h1>note.title</h1>
//                     <p>note.textBody</p>
//                 </div>
                
//             })}
//         )
//     }
// }

// function ListView (props) {
//     return (
//         {props.notesData.map(note => {
//             <div>
//                 <h1>note.title</h1>
//                 <p>note.textBody</p>
//             </div>
            
//         })}
//     )
// }

const ListView = props => {
    return (
        <div className= 'note-card-wrapper'>
                 {
            (props.notesData.map( note => 
                <div className= 'note-card'>
                <h1>{note.title}</h1>
                <p>{note.textBody}</p>
            </div>
            
             
            ))
        }
        </div>
   
      
    )
}

export default ListView; 
      

     
