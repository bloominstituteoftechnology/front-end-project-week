import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNotes } from '../Actions/index.js'
import { Link } from 'react-router-dom';
import { NoteHeading } from '../Styles/AppStyle';
import { Title, NoteWrap, NoteContent } from '../Styles/ListViewStyle';



class ListView extends Component {
    state = {
       mounted: false,
    }

    componentDidMount() {
        this.props.getNotes()
    }

    componentWillUpdate(prevProps) {
        console.log("PREVIOUS PROPS", prevProps)
        console.log("CURRENT PROPS", this.props)
      if(this.props.notes.length !== prevProps.notes.length){
        return this.props.getNotes();
      }
    
    }

    render() {
        if(this.props.notes.length > 0) {
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
            else {
                return(<><h1>Notes Loading....</h1></>)
            }
    }
}


// export default ListView
const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default withRouter(connect( mapStateToProps , { getNotes })(ListView))