import React from 'react';
import './ViewNote.css';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote.js';

const ViewNote = () => {
    return (
        <div>
            <div className='optionsContainer'>
                <div className='entireEditLink'>
                    <Link to='/note/edit'>
                        <p className='edit'>edit</p>
                    </Link>
                </div>
                <DeleteNote />
            </div>
            <h3 className='viewNoteHeader'>Note Name</h3>
            <p className='ViewNoteContent'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis 
            sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas 
            ultricies, ante in accumsan tempor, tortor diam vulputate elit, id ﬁnibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, 
            at tempor nisl rutrum in. Sed in eros luctus ligula porta eﬃcitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus 
            lacinia dolor eget laoreet.
            </p>
            <p className='ViewNoteContent'>
            Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis velit. Ut egestas, ante at lobortis 
            ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet 
            ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam 
            pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. 
            Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, 
            volutpat ante hendrerit, ultrices nisl.
            </p>
        </div>
                
    )
}

export default ViewNote;