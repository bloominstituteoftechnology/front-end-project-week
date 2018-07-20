import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { gettingNote } from '../../actions';

import MappedItem from './MappedItem';

class AllNotes extends Component {
    
    componentDidMount() {
        this.props.gettingNote();
    }

    render() { 
        console.log('props in all notes: ', this.props)
        return ( 
            <div>
                <input id="myInput" type="text" placeholder="Search.." />
                <h3 className='headings mainAreaHeading'>Your Notes: </h3>
                <div className='notesWrapper' id="sortable">
                    {this.props.notes.map(item => {
                        return <MappedItem key={item._id} item={item} />
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