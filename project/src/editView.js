import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class editView extends Component {
    render() {
        return (
            <div>
            <container className='EVcontainer'>
                <div className='EVsideNav'>
                    <div className='EVnavTitleContainer'>
                    <p className='EVsideNavTitle'>Lambda Notes</p>
                    </div>
                    <div className='EVbuttonContainer'>
                    <button className='EVbutton'>View Your Notes</button>
                </div>
                <div className='EVbuttonContainer'>
                    <button className='EVbutton'>+ Create New Note</button>
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