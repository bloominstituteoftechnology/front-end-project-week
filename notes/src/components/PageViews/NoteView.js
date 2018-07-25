import React from 'react';
import './NoteView.css';

const NoteView = () => {
    return (
        <div className='note'>
            <div className='note-header'>
                    <h3>Note Name</h3>
                <div className='actions'>
                    <h4>edit</h4>
                    <h4>delete</h4>
                </div>
            </div>   
            <div className='content'>
                <p>Maybe there's a happy little Evergreen that lives here. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown. You don't want to kill all your dark areas they are very important. You are only limited by your imagination. Let the paint work. Poor old tree. You got your heavy coat out yet? It's getting colder. Let that brush dance around there and play. Everything is happy if you choose to make it that way.</p>
                <p>As trees get older they lose their chlorophyll. It's cold, but it's beautiful. Maybe we got a few little happy bushes here, just covered with snow. This painting comes right out of your heart. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. When things happen - enjoy them. They're little gifts. But they're very easily killed. Clouds are delicate. If you do too much it's going to lose its effectiveness. There are no mistakes. You can fix anything that happens.</p>
            </div>
        </div>
    );
}
 
export default NoteView;