import React, { Component } from 'react';

class List extends Component {

    render() {
        return (
            <div className="Notes">
              <h1>Your Notes:</h1><br/>
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
          
          
        );
      }
  };
  
  export default List;