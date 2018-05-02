import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Styles/ListView.css'
import Sidebar from './Sidebar';


class ListView extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='note'>
                {/* <Sidebar /> */ }
                <h4>Your Notes:</h4>
                { this.props.notes.map(note => 
                    <div className='post' 
                    key={note.title}> 
                        <span className='title'>{ note.title }</span>
                        <hr className='line'/>  
                        <span className='content'>{ note.content }</span>
                    </div>) }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}
export default connect(mapStateToProps)(ListView);

