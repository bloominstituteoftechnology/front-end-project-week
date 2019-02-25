import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getNotes } from '../Actions/index.js'
import { Link } from 'react-router-dom';
import { NoteHeading } from '../Styles/AppStyle';
import { Title, NoteWrap, NoteContent } from '../Styles/ListViewStyle';



class ListView extends Component {
    state = {
       mounted: false,
    }



    componentDidUpdate() {
        this.props.getNotes()
        
    }
    





    render() {

        return (
            <NoteWrap>
                <NoteHeading></NoteHeading>
            {this.props.notes.map( note => {
                return (
               <NoteContent  key={note.id}>
                   <Link to={`/note/${note.id}`} note={this.props.notes} ><Title>{note.title}</Title></Link> 
                    <p>{note.note}</p>
               </NoteContent>
                )
            })}
            </NoteWrap>
        )
    }
}


// export default ListView
const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default withRouter(connect( mapStateToProps , { getNotes })(ListView))