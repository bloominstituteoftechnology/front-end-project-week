import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from './actions/index';
import { withRouter } from 'react-router-dom';
import { Markup } from 'interweave';
import '../src/App.css';

import { NoteButton, FullNoteContainer, NoteButtonContainer, OuterDiv } from './StyledComponents';
import DeleteModal from './DeleteModal';
import Spinner from './Spinner';


class FullNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            delete: false,
            loading: true,
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        setTimeout(()=>{
            this.setState({
                loading: false
            })
        }, 500)
    }

    popup = (e) => {
        e.preventDefault();
        this.setState({
            delete: !this.state.delete
        })
    }

    closeForm = () => {
        this.setState({
            delete: !this.state.delete
        })
    }


    deleter = () => {
        this.props.deleteNote(this.props.currentNote._id)
        this.props.history.push('/notes')
    }

    updateRoute = () => {
        this.props.history.push(`/edit/${this.props.currentNote._id}`)
    }

    render(){
        if(!this.props.currentNote) return null; 
               
        return(            
            <OuterDiv>
            {this.state.loading ? <Spinner/> : (
                <FullNoteContainer id="full-note">
                <NoteButtonContainer>
                    <NoteButton onClick={this.updateRoute}>edit</NoteButton>
                    <NoteButton onClick={this.popup}>delete</NoteButton>
                </NoteButtonContainer>
                <h2>{this.props.currentNote.title}</h2>
                <div id='markup-container'>
                    <Markup content={this.props.currentNote.textBody} />
                </div>
            </FullNoteContainer> )}
            {this.state.delete ? <DeleteModal delete={this.deleter} closeForm={this.closeForm} /> : null }
            </OuterDiv>   
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote    }
};

export default withRouter(connect(mapStateToProps, { deleteNote })(FullNote));