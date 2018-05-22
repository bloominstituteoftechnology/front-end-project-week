import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';

const ListView = () => {
    return (
        <div className='listViewContainer'>
            <h3 className='listViewHeader'>Your Notes:</h3>
            <div className='noteCardsCollection'>
                <Link to='/note' className='noteCardLink'>
                    <div className='noteCard'>
                        <h6 className='noteTitle'>Note Title</h6>
                        <p className='noteContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis …</p>
                    </div>
                </Link>
                <Link to='/note' className='noteCardLink'>
                    <div className='noteCard'>
                        <h6 className='noteTitle'>Note Title</h6>
                        <p className='noteContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis …</p>
                    </div>
                </Link>
                <Link to='/note' className='noteCardLink'>
                    <div className='noteCard'>
                        <h6 className='noteTitle'>Note Title</h6>
                        <p className='noteContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis …</p>
                    </div>
                </Link>
                <Link to='/note' className='noteCardLink'>
                    <div className='noteCard'>
                        <h6 className='noteTitle'>Note Title</h6>
                        <p className='noteContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis …</p>
                    </div>
                </Link>
                <Link to='/note' className='noteCardLink'>
                    <div className='noteCard'>
                        <h6 className='noteTitle'>Note Title</h6>
                        <p className='noteContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis …</p>
                    </div>
                </Link>
                <Link to='/note' className='noteCardLink'>
                    <div className='noteCard'>
                        <h6 className='noteTitle'>Note Title</h6>
                        <p className='noteContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis …</p>
                    </div>
                </Link>
                <Link to='/note' className='noteCardLink'>
                    <div className='noteCard'>
                        <h6 className='noteTitle'>Note Title</h6>
                        <p className='noteContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis …</p>
                    </div>
                </Link>
                <Link to='/note' className='noteCardLink'>
                    <div className='noteCard'>
                        <h6 className='noteTitle'>Note Title</h6>
                        <p className='noteContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis …</p>
                    </div>
                </Link>
                <Link to='/note' className='noteCardLink'>
                    <div className='noteCard'>
                        <h6 className='noteTitle'>Note Title</h6>
                        <p className='noteContent'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis …</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ListView;