import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class createNew extends Component {
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
                        <div className="CNtitle"><strong>Create New Note:</strong></div>
                            <div className="CNnewTitle">
                                <input type="email" name="email" id="exampleEmail" placeholder="New Title" />
                            </div>
                            <div>
                                <textarea className="CNcomment">New Comment</textarea>
                            </div>
                            <div>
                                <button className="CNbutton">Save</button>
                            </div>
                    </form>
                </div>
        </container>
            </div>
        );
    }
}

export default createNew;