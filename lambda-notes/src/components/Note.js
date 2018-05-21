import React, { component } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        };
    }

    
}