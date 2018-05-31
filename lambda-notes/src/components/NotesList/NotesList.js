import React, { Component } from 'react';

class NotesList extends Component {
    render() {
        return (
            <div className='notesList_container'>
                <div><h3 className='content_header'>Your Notes:</h3></div>
                <div className='notesList'>
                    <div className='note'>
                        <div>
                            <h4>Note Title</h4>
                            <hr></hr>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='note'>
                        <div>
                            <h4>Note Title</h4>
                            <hr></hr>
                            <p>More lorem ipsum</p>
                        </div>
                    </div>
                    <div className='note'>
                        <div>
                            <h4>Note Title</h4>
                            <hr></hr>
                            <p>More, more lorem ipsum</p>
                        </div>
                    </div>
                    <div className='note'>
                        <div>
                            <h4>Note Title</h4>
                            <hr></hr>
                            <p>More, more, more lorem ipsum</p>
                        </div>
                    </div>
                    <div className='note'>
                        <div>
                            <h4>Note Title</h4>
                            <hr></hr>
                            <p>More, more, more, more lorem ipsum</p>
                        </div>
                    </div>
                    <div className='note'>
                        <div>
                            <h4>Note Title</h4>
                            <hr></hr>
                            <p>More, more, more, more, more lorem ipsum</p>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}

export default NotesList;