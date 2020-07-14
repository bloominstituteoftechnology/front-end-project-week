import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, CardImg, Card, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchingNotesAction, searchAction} from "../../actions";
import LambdaLeftDiv from './LambdaLeftDiv';
import Search from './Search';
import {FadeLoader} from 'react-spinners';
import { css } from 'react-emotion';
import NavBar from '../NavBar/NavBar';

const fadeloader = css`
    display: block;
    margin: 5%  auto;
`;
 


class NotesDiv extends React.Component {

constructor(props){
        super(props);
        this.state= {
        };

}

componentDidMount() {
	this.props.fetchingNotesAction();
}


viewNotesHandler = ()=>{
		this.resetSearchField();
		this.props.fetchingNotesAction();
}	


/*componentDidUpdate(prevProps,  prevState) {
	console.log('here');
	console.log(prevProps);
	if (prevProps.notes !== this.props.notes){
		this.props.fetchingNotesAction();
		//this.setState({notesArray: this.props.notes});
	}
}*/

resetSearchField = () => {
  document.getElementById("search-field").reset();
}

render() {
	
	return (

	<div className="view-list-body desktop-view">
        <NavBar/>


	<div className="note-card-container">
        <Search id="search-field" />

	<div>{this.props.fetching ? (
          <FadeLoader  className={fadeloader}    color={'#36D7B7'}  size={200} />

        ) :(
	
	<div>
	{this.props.notes.length ==0 ? (<h1>No search match</h1>):(
	<div>
	<h3 className="card-body-title">All Notes</h3>
	<CardDeck>{this.props.notes.map(note =>{

     	return(	
	<Link style={{ textDecoration: 'none' }} to={`/note/${note.id}`} onClick={window.scrollTo(0, 0)} key={note.id}><div>
	<Card className="note-card">
	 <CardImg top width="100%" src={note.image} alt="" />	
	  <CardBody>
          <CardTitle><div className="card-title-div">{note.title.substring(0, 40)}</div></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>{note.content.substring(0, 55)}...</CardText>

        </CardBody>
	  
      </Card>
      </div></Link>)
	})}	
    </CardDeck>
	</div>)}
		</div>
	)}
		</div>
		</div>
		</div>
	
	 );

}
}


const mapStateToProps = state => {
  return {
          notes: state.notes,
          fetching: state.fetchingNotes,
	  saving: state.addingNote
  };
};


export default connect(mapStateToProps, {fetchingNotesAction, searchAction})(NotesDiv);
