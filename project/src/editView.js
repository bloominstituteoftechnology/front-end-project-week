import React, { Component } from 'react';

class editView extends Component {
    render() {
        return (
            <div>
            <container className='EVcontainer'>
                <div className='EVsideNav'>
                    <p className='EVsideNavTitle'>Lambda Notes</p>
                    <div>
                    <button>View Your Notes</button>
                </div>
                <div>
                    <button>+ Create New Note</button>
                </div>
                </div>
                 


                <div className='EVmainBody'>
                    <p>Edit Note:</p>
                </div>
                    <div className='EVnewTitle'>
                        <input type="title" name="title" id="exampleTitle" placeholder="New Title" />
                    </div>
                    <div className='EVnewContent'>
                    <input type="content" name="content" id="exampleContent" placeholder="New Content" />
                    </div>
            </container>
            
            </div>
        );
    }
}

export default editView;