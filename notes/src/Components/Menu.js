import React, {Component} from 'react';

//import Note from './Note';
import CreateNote from './CreateNote';

class Menu extends Component {
    render() {
        return ( 
            <div>
                <CreateNote/>
            </div>
        );
    }
}

export default Menu;