import React from 'react';
import Note from './note.js';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getNotes} from '../../actions/index.js';

const NotesList=styled.div`
    width: 92.5%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-left: 5%;
`
const NotesHeading=styled.h2`
    text-align: left;
    color:#424242
    margin-left: 5%;
    margin-top: 20px;
`
const NotesPage=styled.div`
    background-color:#ddd;
    min-height: 100vh;
    width: 75%;
`
const NoteFilter=styled.input`
    margin-right:10%;
    width: 35%;
    height: 30px;
    outline:none;
    border-radius:4px;
    border-color:transparent;
    border:1px solid #A9A9A9;
`
const NotesPageHeader=styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    box-sizing:border-box;
    padding-top:20px;
    width:100%;
    height:95px;
`
class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            filteredNotes:'',
            filterParam:'',
            sortOption: 'default'
        }
    }
    componentDidMount() {
        localStorage.setItem('location',this.props.location.pathname);
        const sortOption=localStorage.getItem('sortOption');
        const token=localStorage.getItem('jwt');
        const id=localStorage.getItem('id');
        const reqOptions={
            headers:{
                Authorization:token,
                id: id
            }
        }
        sortOption ?
        this.setState({sortOption:sortOption},()=>this.props.getNotes(reqOptions))
        :this.props.getNotes(reqOptions);
    }
    inputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value},
            ()=>{this.filterNotes();});
    }
    filterNotes=()=>{
        let filteredNotes=this.props.notes.slice();
        const filterParam=this.state.filterParam.toLowerCase();
        filteredNotes=filteredNotes.filter(e=>
            e.textBody.toLowerCase().includes(filterParam)||
            e.title.toLowerCase().includes(filterParam) ||
            (e.tags!==null && e.tags.toLowerCase().includes(filterParam))
        );
        return this.setState({filteredNotes:filteredNotes});
    }
    radioChange=(e)=>{
        this.setState({[e.target.name]:e.currentTarget.value},
            ()=>{localStorage.setItem('sortOption',this.state.sortOption)});
    }
    sortByTitle=(notes)=>{
        let sortedNotes=notes.slice();
        sortedNotes.sort(function(a,b){
            a=a.title.toUpperCase(); 
            b=b.title.toUpperCase(); 
            if (a<b) {
                return -1;
              } else if (a>b) {
                return 1;
              } 
              return 0;
            })
        return sortedNotes;
    };
    render() {
        if (!this.props.fetchingNotes) {
        return(
            <NotesPage>
                <NotesPageHeader>
                    <NoteFilter type='text' name='filterParam' placeholder='Enter search term' value={this.state.filterParam} onChange={this.inputChange}/>
                    <p>Sort Options:</p>
                    <input type="radio" value={'default'} id='Default' checked={this.state.sortOption==='default'} name="sortOption" onChange={this.radioChange}/>
                    <label htmlFor='Default'>Default</label>
                    <input type="radio" value={'title'} id='Title' checked={this.state.sortOption==='title'} name="sortOption" onChange={this.radioChange}/>
                    <label htmlFor='Title'>Title</label>
                </NotesPageHeader>
                <NotesHeading>Your Notes:</NotesHeading>
                <NotesList>
                    {
                        this.state.filterParam.length===0?
                        this.state.sortOption==='default'?
                        this.props.notes.map((e,i)=><Note key={i} data={e}></Note>):
                        this.sortByTitle(this.props.notes).map((e,i)=><Note key={i} data={e}></Note>):
                        this.state.filteredNotes?
                        this.state.sortOption==='default'?
                        this.state.filteredNotes.map((e,i)=><Note key={i} data={e}></Note>):
                        this.sortByTitle(this.state.filteredNotes).map((e,i)=><Note key={i} data={e}></Note>)
                        :null
                    }
                </NotesList>
            </NotesPage>
        )
    } else {
        return (
            <NotesPage/>
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