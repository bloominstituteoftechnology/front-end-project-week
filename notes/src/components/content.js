import React, {Component} from 'react';
import '../index.css';
import NotesContent from '../components/content_list';

class AppMain extends Component
{
    render(){
        return(
            <div id="main_content">
                <NotesContent />
            </div>
        );
    }
}

export default AppMain;