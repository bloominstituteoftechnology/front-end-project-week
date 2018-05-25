import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class editView extends Component {
    render() {
        return (
            <div>
            <container className='EVcontainer'>
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
                    <NavLink className='Navbutton' to='/createNew'>+ Create New Notes</NavLink>
                </button>
            </div>
            </div>
                 


                <div className='EVmainBody'>
                    <div className='EVmainTitle'>
                    <p>Edit Note:</p>
                    </div>
                    <div className='EVnewTitleContainer'>
                    <input className='EVnewTitle' type="title" name="title" id="exampleTitle" placeholder="New Title" />
                    </div>
                    <div className='EVnewContentContainer'>
                    <textarea className='EVnewContent'>New Content</textarea>
                    </div>
                    <div className='EVbuttonContainer'>
                        <button className='EVbutton'>Update</button>
                    </div>
                </div>
                 
            </container>
            
            </div>
        );
    }
}

export default editView;