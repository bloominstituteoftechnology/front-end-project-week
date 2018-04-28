import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteContent: '',
    }
  }

render(){
  return (
    <div className='note_list'>
      <h4 className='nhead'> Your Notes: </h4>
      <div className='note_list_body'>

     <Card className='note_card' body>
        <Link to='/note/'><CardTitle className='card_title'>Note Title</CardTitle></Link>
          <CardText className='card_text'>Eos virtute nusquam ex, has affert vocent aperiam ne.
           Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et. 
           Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, 
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.</CardText>
          {/* <Button className='card_button'>Edit</Button> */}
        </Card>

        <Card className='note_card' body>
        <Link to='/note/'><CardTitle className='card_title'>Note Title</CardTitle></Link>
          <CardText className='card_text'>Eos virtute nusquam ex, has affert vocent aperiam ne.
           Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et. 
           Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, 
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.</CardText>
          {/* <Button className='card_button'>Edit</Button> */}
        </Card>

        <Card className='note_card' body>
        <Link to='/note/'><CardTitle className='card_title'>Note Title</CardTitle></Link>
          <CardText className='card_text'>Eos virtute nusquam ex, has affert vocent aperiam ne.
           Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et. 
           Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, 
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.</CardText>
          {/* <Button className='card_button'>Edit</Button> */}
        </Card>
      <Card className='note_card' body>
        <Link to='/note/'><CardTitle className='card_title'>Note Title</CardTitle></Link>
          <CardText className='card_text'>Eos virtute nusquam ex, has affert vocent aperiam ne.
           Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et. 
           Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, 
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.</CardText>
          {/* <Button className='card_button'>Edit</Button> */}
        </Card>

        <Card className='note_card' body>
        <Link to='/note/'><CardTitle className='card_title'>Note Title</CardTitle></Link>
          <CardText className='card_text'>Eos virtute nusquam ex, has affert vocent aperiam ne.
           Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et. 
           Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, 
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.</CardText>
          {/* <Button className='card_button'>Edit</Button> */}
        </Card>

        <Card className='note_card' body>
        <Link to='/note/'><CardTitle className='card_title'>Note Title</CardTitle></Link>
          <CardText className='card_text'>Eos virtute nusquam ex, has affert vocent aperiam ne.
           Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et. 
           Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, 
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.</CardText>
          {/* <Button className='card_button'>Edit</Button> */}
        </Card>

        <Card className='note_card' body>
        <Link to='/note/'><CardTitle className='card_title'>Note Title</CardTitle></Link>
          <CardText className='card_text'>Eos virtute nusquam ex, has affert vocent aperiam ne.
           Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et. 
           Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei,
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.</CardText>
          {/* <Button className='card_button'>Edit</Button> */}
        </Card>

        <Card className='note_card' body>
        <Link to='/note/'><CardTitle className='card_title'>Note Title</CardTitle></Link>
          <CardText className='card_text'>Eos virtute nusquam ex, has affert vocent aperiam ne.
           Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et. 
           Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, 
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.</CardText>
          {/* <Button className='card_button'>Edit</Button> */}
        </Card>

        <Card className='note_card' body>
        <Link to='/note/'><CardTitle className='card_title'>Note Title</CardTitle></Link>
          <CardText className='card_text'>Eos virtute nusquam ex, has affert vocent aperiam ne.
           Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et. 
           Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, 
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.</CardText>
          {/* <Button className='card_button'>Edit</Button> */}
        </Card>
    </div>
    </div>
  )
  }
}

export default NoteList;

// {this.state.note.noteText}