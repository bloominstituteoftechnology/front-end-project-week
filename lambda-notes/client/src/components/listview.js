import React, { Component } from 'react';
import Note from './noteicon';

class ListView extends Component {
    
    render() {
        return (
            <div>
                <div className="section__content__left">
                    <h1 className="title">Lambda Notes</h1>
                    <button className="button__main">View Your Notes</button>
                    <br />
                   <button className="button__main">+ Create New Note</button>

                </div>
                <div className="main">
                     <div className="test">
                         <h3 className="title_main">Your Notes:</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListView;