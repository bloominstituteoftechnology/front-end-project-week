import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, getNotes } from '../actions';


class Notes extends Component {
    //do I need state or constructor state?
    constructor() {
        super()
        
    }
//not working need to get it to map

        render() {
            return( 
                <div>
                    
                        {this.props.notes.map((note, i) => {
                            return (
                                <div key={i}>
                                {note.title}{note.body}
                                </div>


                            )
                        } )}


                </div>



            )




        }

}
const mapStateToProps = (state) => {
    return {
        notes: state,
        // fetching: state
    }
}

export default connect(mapStateToProps, {addNote, getNotes})(Notes)