import React, { Component } from 'react';
import './index.css';

class CreateNote extends Component {
    render() {
        return (
            <div className='createView'>
                <form>
                <br /><br />
                    <input type ="text" />
                  <br /><br />
                    <textarea rows="20"/>
                    <br />
                    <button>Save</button>
                </form>
               
            </div>
        )
    }
}

export default CreateNote;