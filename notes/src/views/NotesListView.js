import React from 'react';

import NotesList from '../components/NotesList';

class NotesListView extends React.Component {

    render() {
        if(this.props.notes === undefined) {
            return <div>Loading...</div>
        }
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