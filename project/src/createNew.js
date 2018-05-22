import React, { Component } from 'react';

class createNew extends Component {
    render() {
        return (
            <div>
            <container className='container'>
            <div className='sidebar'>
                <div className='heading-container'>
                    <p className='heading-font'><strong>Lambda Notes</strong>
                </p>
                </div>
                
                <div>
                    <button className='button'>View Your Notes</button>
                </div>
                <div>
                    <button className='DL button'>+ Create New Notes</button>
                </div>
            </div>

            <div className='main'>
                
            </div>
        </container>
            </div>
        );
    }
}

export default createNew;