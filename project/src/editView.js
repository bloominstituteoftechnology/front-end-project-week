import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class editView extends Component {
    render() {
        return (
            <div>
            <container className='CNcontainer'>
                <div className='sidebar'>
                    <div className='heading-container'>
                        <p className='heading-font'><strong>Lambda Notes</strong>
                    </p>
                    </div>
                    
                      <div>
                            <button className='button'>
                                <NavLink className='Navbutton' to='/'>View Your Notes</NavLink>
                            </button>
                        </div>
                        <div>
                        <button className='button'>
                            <NavLink className='Navbutton' to='/noteView'>+ Create New Notes</NavLink>
                        </button>
                    </div>
                </div>

                <div className='createNew-Form'>
                    <form className="form">
                        <div className="CNtitle"><strong>Edit Note:</strong></div>
                            <div className="CNnewTitle">
                                <input className="CNinput" type="email" name="email" id="exampleEmail" placeholder="New Title" />
                            </div>
                            <div>
                                <textarea className="CNcomment">New Comment</textarea>
                            </div>
                            <div className='CNbuttonContainer'>
                                <button className="CNbutton">Save</button>
                            </div>
                    </form>
                </div>
        </container>
            
            </div>
        );
    }
}

export default editView;