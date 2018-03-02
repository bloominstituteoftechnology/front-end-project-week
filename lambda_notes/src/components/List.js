import React, { Component } from 'react';
import Delete from './Delete';
import Redirect from 'react-router-dom/Redirect';

class List extends Component {

        deleteNote = () => {
            this.props.deleteNote(this.props.match.params.id);
            this.props.push('/');
            this.setState({ deleting: false });
          }
        
        cancelDelete = () => {
            this.props.push('/');
            this.setState({ deleting: false });
          }

    render() {
        return (
            <div className="Notes">
              <h1>Your Notes:</h1>
                <div>
                    <ul>
                        {this.props.notes.map(notes => {
                            return (
                                <li className="note-container-list" key={notes.id}>
                                    <h4>{notes.title}</h4> <hr/> <p>{notes.text}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
                    
                
                
            </div>
          
          
        );
      }
  };
  
  export default List;