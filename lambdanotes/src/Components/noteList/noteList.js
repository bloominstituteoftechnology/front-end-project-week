import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class NoteList extends Component {
      state = {
      noteData: []
    };

render(){
  return (
    <div className="note_list">
    <Row>
      <Col sm="6">
        <Card className='note_card' body>
          <CardTitle className='card_title'>Title:</CardTitle>
          <CardText className='card_text'>Eam ea quaeque utroque pertinax, usu ei esse habeo democritum.Luptatum partiendo qui no, timeam apeirian pertinacia mel ut, eum at eruditi blandit. Solum dicam elaboraret in vel. Animal theophrastus ut eum. Utinam nemore corpora nec in.</CardText>
          <Button className='card_button'>Edit</Button><Button className='card_button'>Delete</Button>
        </Card>
      </Col>
    </Row>
    </div>
  )
}
}

export default NoteList;

// {this.state.note.noteText}