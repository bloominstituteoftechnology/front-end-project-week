import React from 'react';
import {connect} from 'react-redux';

import './css/DownloadNotes.css'

class DownloadNotes extends React.Component {
    render() {
        return (
            <div className='download'> 
                <h1 className='download-header'>Your Notes Have Been Downloaded</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps, {})(DownloadNotes);