import React from 'react';
import './index.css';


class NotesList extends React.Component {
    render() {
      const notesIndividual = [
             <div className='note'>
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac.
                    Morbi dignissim ex tellus, quis venenatis purus tempor ut. 
                    Pellentesque sit amet ex eget elit facilisis aliquet. 
                    Sed facilisis nec massa vel faucibus. Nam a sollicitudin nulla. 
                    Pellentesque tincidunt.
                    </p>
                </div>
            </div>,
            <div className='note'>
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac.
                    Morbi dignissim ex tellus, quis venenatis purus tempor ut. 
                    Pellentesque sit amet ex eget elit facilisis aliquet. 
                    Sed facilisis nec massa vel faucibus. Nam a sollicitudin nulla. 
                    Pellentesque tincidunt.
                    </p>
                </div>
            </div>,
            <div className='note'>
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac.
                    Morbi dignissim ex tellus, quis venenatis purus tempor ut. 
                    Pellentesque sit amet ex eget elit facilisis aliquet. 
                    Sed facilisis nec massa vel faucibus. Nam a sollicitudin nulla. 
                    Pellentesque tincidunt.
                    </p>
                </div>
            </div>,
            <div className='note'>
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac.
                    Morbi dignissim ex tellus, quis venenatis purus tempor ut. 
                    Pellentesque sit amet ex eget elit facilisis aliquet. 
                    Sed facilisis nec massa vel faucibus. Nam a sollicitudin nulla. 
                    Pellentesque tincidunt.
                    </p>
                </div>
            </div>,
            <div className='note'>
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac.
                    Morbi dignissim ex tellus, quis venenatis purus tempor ut. 
                    Pellentesque sit amet ex eget elit facilisis aliquet. 
                    Sed facilisis nec massa vel faucibus. Nam a sollicitudin nulla. 
                    Pellentesque tincidunt.
                    </p>
                </div>
            </div>,
            <div className='note'>
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac.
                    Morbi dignissim ex tellus, quis venenatis purus tempor ut. 
                    Pellentesque sit amet ex eget elit facilisis aliquet. 
                    Sed facilisis nec massa vel faucibus. Nam a sollicitudin nulla. 
                    Pellentesque tincidunt.
                    </p>
                </div>
            </div>,
            <div className='note'>
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac.
                    Morbi dignissim ex tellus, quis venenatis purus tempor ut. 
                    Pellentesque sit amet ex eget elit facilisis aliquet. 
                    Sed facilisis nec massa vel faucibus. Nam a sollicitudin nulla. 
                    Pellentesque tincidunt.
                    </p>
                </div>
            </div>,
            
            <div className='note'>
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac.
                    Morbi dignissim ex tellus, quis venenatis purus tempor ut. 
                    Pellentesque sit amet ex eget elit facilisis aliquet. 
                    Sed facilisis nec massa vel faucibus. Nam a sollicitudin nulla. 
                    Pellentesque tincidunt.
                    </p>
                </div>
            </div>,
            <div className='note'>
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac.
                    Morbi dignissim ex tellus, quis venenatis purus tempor ut. 
                    Pellentesque sit amet ex eget elit facilisis aliquet. 
                    Sed facilisis nec massa vel faucibus. Nam a sollicitudin nulla. 
                    Pellentesque tincidunt.
                    </p>
                </div>
            </div>,
      ]
        return (
         <div className='notes-container'>
            <div><h3 className='content-header'>Your Notes:</h3></div>
          <div className='noteslist'>
          {notesIndividual}
            
          </div>
        </div>
        );
    }
}

export default NotesList;