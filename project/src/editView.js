import React, { Component } from 'react';

class editView extends Component {
    render() {
        return (
            <div className="EVmainContainer">
                <div className="EVcontainer">
                    <div classname="EVsideNav">
                        <p classname="EVsideNavTitle">Lambda Notes</p>
                    </div>
                    <div>
                        <button>View Your Notes</button>
                    </div>
                    <div>
                        <button>+ Create New Note</button>
                    </div>


                    <div classname="EVmainBody">
                        <p>Edit Note:</p>
                    </div>
                    <div className="EVnewTitle">
                        <input type="title" name="title" id="exampleTitle" placeholder="New Title" />
                    </div>
                    <div className="EVnewContent">
                    <input type="content" name="content" id="exampleContent" placeholder="New Content" />
                </div>
                </div>
                
            </div>
        );
    }
}

export default editView;