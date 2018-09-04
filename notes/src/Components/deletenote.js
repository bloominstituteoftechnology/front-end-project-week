import  React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Note from './note'
//import axios from 'axios';

export default class DeleteNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: []
        };
    }

render() {
    return(
        <div>
            this is delete

            {/* <Route path='/23' component = {Note} /> */}
        </div>
    
    )
}
}