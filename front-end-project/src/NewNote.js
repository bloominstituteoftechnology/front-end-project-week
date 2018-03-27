import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class NewNote extends Component{
    state = {
        rightSide: null,
      };

      componentDidMount() {
        // change this line to grab the id passed on the URL
        
        const id = this.props.match.params.id;
        console.log(this);
        axios
          .catch(error => {
            console.error(error);
          });
      }

    render () {
        return(
            
            <div className='rightSide'>
                <NavLink to={`/NewNote/${NewNote.id}`}>
                    <p className='RS-title'>Your Notes:</p>
                    <div className = 'edit-forms'>
                        <div className='edit-title'>
                            <t className='t'>Note Title</t>
                        </div>
                        <div className='edit-content'>
                            <t className='t'>Note Content</t>
                        </div>
                    </div>
                </NavLink>
            </div>
        );
    }
}