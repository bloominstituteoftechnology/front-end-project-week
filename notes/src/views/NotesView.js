// *** === Imports === *** //
// React
import React, {
    Component
} from 'react';

// Redux
import {
    connect
} from 'react-redux';

// Action Creators
import {
    fetchNotes
} from '../actions';

// Component
import Notes from '../components/Notes';

// *** === Class Component === *** //
class NotesView extends Component {
    // ** == cDM == **
    componentDidMount() {
        this.props.fetchNotes();
    }

    // ** == Render to DOM == **
    render() {
        if (this.props.notes.length === 0) {
            return setTimeout(() => {
                return (
                    <h1>Loading Notes</h1>
                );
            }, 1000);
        } else if (this.props.error) {
            return (
                <h1>There was an error loading the notes</h1>
            );
        } else {
            return (
                <Notes notes={this.props.notes} />
            );
        }
    }
}


// *** === Map to Props=== *** //
const mapStateToProps = state => {
    return {
        ...state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
    };
};


// *** === Connect & Export === *** //
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesView);