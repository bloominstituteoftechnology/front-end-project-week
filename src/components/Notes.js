import React, { Component } from 'react';
import NoteThumbnail from './NoteThumbnail';
import { Container, Row } from 'reactstrap';
// import NoteButton from './NoteButton';
 import { withRouter } from 'react-router-dom';

class Notes extends Component {  
    state = {
        notes: false
        
    }

    logout = () => {
        // console.log("Log")        
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          localStorage.removeItem('username');  
          this.props.logout();     
          this.props.history.push('/');
              
      };

        render() { 
            // console.log(this.props);
        return ( this.state.notes ? ( null) : (

            <Container>
                <button className="logout-button" onClick={this.logout}>Log Out</button>
                <h3 className="heading-notes">Your Notes:</h3> 
                <Row className="notes-section">  
                    {this.props.state.notes ? 
                    this.props.state.notes.map( note => {
                      return <NoteThumbnail note={note} key={note._id}/>
                    }):( this.props.history.push('/'))
                }
                </Row>
            </Container>
          )
       )
    }
}
 
export default withRouter(Notes);