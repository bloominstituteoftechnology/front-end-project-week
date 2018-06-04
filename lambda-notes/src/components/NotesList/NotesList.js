import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        notesArray:state
    }
}
class NotesList extends Component {
    constructor() {
        super()
        this.state = {
        
        }
    }
    componentWillMount() {//fires before render()
        let reversed = Array.from(this.props.notesArray).reverse();
        this.setState({notesArray:reversed})
    }
    generateNotes = (what, where) => {
        return (
            <Link to={`/note/${what._id}`} className='unstiledLink' key={what._id}>
                <div className='note' key={what._id}>
                    <div>
                         <h4>{what.title}</h4>
                        <hr></hr>
                        <p>{what.body}</p>
                    </div>
                </div>
            </Link>
        )

    }


    render() {
        return (
            <div className='notesList_container'>
                <div><h3 className='content_header'>Your Notes:</h3></div>
                <div className='notesList'>
                    {this.props.notesArray.map(this.generateNotes)} 
                                </div>
                            </div>
                         );
    }
}
export default connect(mapStateToProps, {/*ActionHere*/ })(NotesList);
//connect connects redux to props props is = to notearray      notelist is only listening