import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import NoteListView from './src/Components/NoteListView';
// import NoteDetailView from './src/Components/NoteDetailView';
// import CreateNoteView from './src/Components/CreateNoteView';
// import EditNoteView from './src/Components/EditNoteView';
// import DeleteNoteModal from './src/Components/DeleteNoteModal';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
