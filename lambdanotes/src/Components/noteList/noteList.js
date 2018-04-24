import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


class NoteList extends Component {
  constructor(state) {
    super(state);
    this.state = {
      noteData: []
    };
  }
render(){
  return (
    <div className="note_list">
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle className='card_title'>Title:</CardTitle>
          <CardText className='card_text'>Eam ea quaeque utroque pertinax, usu ei esse habeo democritum.Luptatum partiendo qui no, timeam apeirian pertinacia mel ut, eum at eruditi blandit. Solum dicam elaboraret in vel. Animal theophrastus ut eum. Utinam nemore corpora nec in.</CardText>
          <Button>Edit</Button><Button>Delete</Button>
        </Card>
      </Col>
    </Row>
    </div>
  )
}
}

export default NoteList;

// {this.state.note.noteText}