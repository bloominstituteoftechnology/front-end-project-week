import React from 'react';
import DeleteNote from './DeleteNote';
import { Link } from 'react-router-dom';

const ViewNote = () => {
    return (
        <div>
            <div>
            <Link to ='/edit-note'>
                <div>Edit</div>
            </Link>
            </div>
            <DeleteNote />
        <div className='view-note'>
        <h4>Note Name</h4>
        <p className='ViewNoteContent'>
+            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis 
+            sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas 
+            ultricies, ante in accumsan tempor, tortor diam vulputate elit, id ﬁnibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, 
+            at tempor nisl rutrum in. Sed in eros luctus ligula porta eﬃcitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus 
+            lacinia dolor eget laoreet.
+            </p>
        </div>
    </div>
    )
}

export default ViewNote;