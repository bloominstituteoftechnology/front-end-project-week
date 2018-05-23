import React, { Component } from 'react';

class editView extends Component {
    render() {
        return (
            <div>
            <container className='EVcontainer'>
                <div className='EVsideNav'>
                    <div className='EVnavTitleContainer'>
                    <p className='EVsideNavTitle'>Lambda Notes</p>
                    </div>
                    <div>
                    <button className='EVbutton'>View Your Notes</button>
                </div>
                <div>
                    <button className='EVbutton'>+ Create New Note</button>
                </div>
                </div>
                 


                <div className='EVmainBody'>
                    <div className='EVmainTitle'>
                    <p>Edit Note:</p>
                    </div>
                    <div >
                    <input className='EVnewTitle' Etype="title" name="title" id="exampleTitle" placeholder="New Title" />
                    </div>
                    <div>
                    <input className='EVnewContent' type="content" name="content" id="exampleContent" placeholder="New Content" />
                    </div>
                </div>
                 
            </container>
            
            </div>
        );
    }
}

export default editView;