import React from 'react';
import Note from './note.js';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getNotes} from '../../actions';
const NotesList=styled.div`
width: 92.5%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
margin-left: 5%;
`
const NotesHeading=styled.h2`
text-align: left;
color:#424242
margin-left: 5%;
margin-top: 19px;
`
const NotesPage=styled.div`
background-color:#ddd;
min-height: 100vh;
width: 75%;
`
const NoteFilter=styled.input`
height: 20px;
margin: 0 auto;
margin-top: 25px;
margin-right: 1%;
width: 255px;
`
class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            filteredNotes:'',
            filterParam:''
        }
    }
    componentDidMount() {
        localStorage.setItem('location',this.props.location.pathname);
        this.props.getNotes();
    }
    inputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value},()=>{
            let filteredNotes=this.props.notes.slice();
            const filterParam=this.state.filterParam.toLowerCase();
            filteredNotes=filteredNotes.filter(e=>e.textBody.toLowerCase().includes(filterParam)||e.title.toLowerCase().includes(filterParam));
            return this.setState({filteredNotes:filteredNotes});
        });
    }
    render() {
        if (!this.props.fetchingNotes) {
        return(
            <NotesPage>
                <NoteFilter type='text' name='filterParam' value={this.state.value} onChange={this.inputChange}/>
                <NotesHeading>Your Notes:</NotesHeading>
                <NotesList>
                    {this.state.filterParam.length===0?
                    this.props.notes.map((e,i)=><Note key={i} data={e}></Note>):
                    this.state.filteredNotes?this.state.filteredNotes.map((e,i)=><Note key={i} data={e}></Note>):null
                        }
                </NotesList>
            </NotesPage>
        )
    } else {
        return (
            <div></div>
        );
        }
    }
}
const mapStateToProps=state=>{
    return{
        notes:state.notes,
        fetchingNotes:state.fetchingNotes
    }
}
export default connect(mapStateToProps,{getNotes})(Notes);