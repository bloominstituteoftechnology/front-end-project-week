import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import HomeLeftPanel from './HomeLeftPanel';
import {deleteNote} from '../actions';
import Delete from './Delete';

const StyledNote = styled.div`
    display: flex;
    height: 700px;

    .links {
        float: right;
        margin-right: 30px
        display: flex;
        position: static;
        font-size: 14px;

        .delete-link {
            margin-left: 30px;
        }

        
    }

    .card-body {
        font-size: 12px;
        width: 50%;
        background: lavender;
    }

    .card-title {
        font-size: 16px;

    }

    .card-text {

    }
`;

class SingleNoteView extends React.Component {
    modal = false;

    toggleModal = _ => {
        this.modal = !this.modal;
        this.forceUpdate();
      }
    
    render() {
        console.log('this.props', this.props)
        console.log('this.props.history', this.props.history)
        console.log('this is this.props.notes', this.props.notes)
        // console.log('BubbleGum', this.props.notes[this.props.match.params.id].title)
    
        return (
            <StyledNote key={this.props.match.params.id}>
            
            <HomeLeftPanel />
                {this.modal ? (
                    <div>
                    <Delete id={this.props.match.params.id} toggleModal={this.toggleModal} handleDelete={this.props.deleteNote} />
                    </div>
                    ) : (null)}
                
                <div className="card-body" key={this.props.match.params.id}>
                <div className="links">
                    <Link to={`/edit-note/${this.props.match.params.id}`}>edit</Link>
                    <a className="delete-link" onClick={() => this.toggleModal()}>delete</a>
                </div>
                    {/* Since you made the SingleNoteView's functionality dependent on a sequential id
                    system, using v4 will break the single note view unless this is changed.  Regardless,
                    getting the notes data in this way presents a lot of problems when trying to implement
                    delete functionality */}
                    {/* <h2 className="card-title">{this.props.notes[this.props.match.params.id - 1].title}</h2>
                    <CardText className="card-text">{this.props.notes[this.props.match.params.id - 1].text}</CardText> */}
                    
                    <h2 className="card-title">{this.props.notes.find(note => note.id === Number(this.props.match.params.id)).title}</h2>
                    <CardText className="card-text">{this.props.notes.find(note => note.id === Number(this.props.match.params.id)).text}</CardText>
                    
                </div>
            </StyledNote >
        )
    }
}
  const mapStateToProps = (state) => {
    return {
      notes: state.notes
    };
  };
  
  export default connect(mapStateToProps, {deleteNote})(SingleNoteView);