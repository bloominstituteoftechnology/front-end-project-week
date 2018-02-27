import React, { Component } from 'react';
import Note from './noteicon';

class ListView extends Component {
    
    render() {
        return (
            <div className="section">

                <div className="section__content__left">
                    <h1>Lambda Notes</h1>
                    <div className="button__main">View Your Notes</div>
                    <br />
                    <div className="button__main">+ Create New Note</div>

                </div>

                <div className="section__content__right">
                
                     <h3>Your Notes:</h3>
                     <div className="section__content__icons">
                         <Note />
                </div>
                </div>
            </div>
        );
    }
}

export default ListView;