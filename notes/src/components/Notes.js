import React, { Component } from 'react';
import NoteThumbnail from './NoteThumbnail';
import { Container, Row } from 'reactstrap';
class Notes extends Component {
    constructor(props) {
        super(props);
        this.state={
            notes: [{
              id: 0,
              title: 'Note Title',
              content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
            }, {
              id: 1,
              title: 'Note Title',
              content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
            }, {
              id: 2,
              title: 'Note Title',
              content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
           }, {
             id: 3,
              title: 'Note Title',
              content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
            }, {
              id: 4,
              title: 'Note Title',
              content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
            }, {
              id: 5,
              title: 'Note Title',
              content:'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
            }]
          }
    }

   SaveNote = (note) => {
       const notes = this.state.notes;
       notes.push(note);
       this.setState({notes: notes})       
   }
    render() { 
        return (
            <Container>
                <h3 className="heading">Your Notes:</h3> 
                <Row className="notes-section">
                    {this.state.notes.map( note => {
                        return <NoteThumbnail note={note} key={note.id}/>
                    })}
                </Row>
            </Container>
        )
    }
}
 
export default Notes;