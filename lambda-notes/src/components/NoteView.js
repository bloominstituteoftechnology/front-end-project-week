import React from 'react';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const NoteView = () => {

    return (
        <div>
            <Button color="link">edit</Button>
            <Button color="link">delete</Button>
        </div>

        <div className="NoteViewName" style="width:25%">
            <h2 className="NoteViewName">Note Name</h2>
        </div>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Sit amet nisl purus in mollis nunc sed id semper. Molestie ac feugiat sed lectus. Erat pellentesque adipiscing commodo elit at imperdiet dui. Egestas dui id ornare arcu odio ut sem nulla.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Eget mauris pharetra et ultrices neque ornare aenean. Quis blandit turpis cursus in hac habitasse platea. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Molestie at elementum eu facilisis sed. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Habitant morbi tristique senectus et. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
        </p>  
    );
};


export default NoteView;