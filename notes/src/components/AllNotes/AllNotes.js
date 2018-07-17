import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { gettingNote } from '../../actions';

import SingleNote from './SingleNote';

class AllNotes extends Component {
    
    componentDidMount() {
        this.props.gettingNote();
    }

    render() { 
        return ( 
            <div>
                <h3 className='headings mainAreaHeading'>Your Notes</h3>
                <div className='notesWrapper'>
                    {this.props.notes.map(item => {
                        return <SingleNote key={item._id} item={item} />
                    })}
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    console.log(' state in map: ', state)
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps, { gettingNote })(AllNotes);