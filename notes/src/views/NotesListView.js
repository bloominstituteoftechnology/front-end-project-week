import React from 'react';

import NotesList from '../components/NotesList';

class NotesListView extends React.Component {

    render() {
        return (
            <div>
                <NotesList {...this.props} />
            </div>
        );
    }
}

// const mapStatetoProps = state => {
//     console.log(state);
//     return {
//         notes: state.notes,
//         fetchingNotes: state.fetchingNotes,
//         error: state.error
//     }
// }

// export default connect(mapStatetoProps, { getNotes })(NotesListView);
export default NotesListView;