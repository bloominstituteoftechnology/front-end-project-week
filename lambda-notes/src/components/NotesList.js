import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import loading from './../loading.gif'
let maxLenBody = 120;
let maxLenTitle = 12;

const NotesList = props => {
   
    return(
        <section className="notes-list">
            
            <div className="header">
                <h1>Your notes</h1>

                {props.searchStatus.length > 0 ? <h2>{props.searchStatus}</h2> :null        
            }
            </div>    
            <div className="notes-wrapper">
            
            
            {props.loading ? <div className="loading"><img alt="Loading gif" src={loading} /></div> : null }
            
                {props.notes.map((note, index) => {
                    return (
                        <div key={index} className="card">
                            <Link to={`/note/${note._id}`} >
                                <div className="card-wrapper">
                                    <h2 className="note-title">
                                        {note.title.length > maxLenTitle ?
                                            note.title.slice(0, maxLenTitle).concat('...').toLowerCase()
                                        :
                                        note.title.toLowerCase()
                                            
                                        }

                                    </h2>

                                    <p className="note-textBody">
                                        {note.textBody.length > maxLenBody ?
                        
                                        note.textBody.slice(0,maxLenBody).concat('...') 
                                        :
                                        note.textBody

                                        }
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
                
            </div>      
        </section>
    )
}
    
export default NotesList;