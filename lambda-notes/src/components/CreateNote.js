import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  margin-top: 50px;
  margin-bottom:30px;
`
const FieldDivs = styled.div`
  margin-bottom:12px;
`

const StyledInput = styled.input`
  font-family: 'Roboto', sans-serif;
  width:58%;
  height: 42px;
  padding: 0 10px;
  border: 1px solid #979797;
  border-radius: 3px;
  font-size:1.2rem;
`

const StyledTextArea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  width:100%;
  height:346px;
  padding: 20px 20px;
  border: 1px solid #979797;
  border-radius: 3px;
  font-size:1.2rem;
`

const BaseButton = styled.button`
  background-color: #2BC1C4;
  border: 1px solid #979797;
  height: 40px;
  color: white;
  text-align:center;
  width:31%;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
`

class CreateNote extends Component {
  constructor(){
    super()
    this.title = React.createRef();
    this.content = React.createRef();
  }

  render() {
    return (
      <div>
        <Header> Create New Note:</Header>
        <FieldDivs>
          {/* Normally could just do ref = {this.title}, however, when using styled components, 
          need to call the innerRef this way, directly from documentation. */}
          <StyledInput innerRef={x => {this.title = x}} type="text" placeholder="Note Title"/>
        </FieldDivs>
        <FieldDivs>
          <StyledTextArea innerRef={x => {this.content = x}} placeholder="Note Content"/>
        </FieldDivs>
        <FieldDivs>
          <BaseButton onClick={() => this.props.saveNewNote(this.title.value, this.content.value)}> Save </BaseButton>
        </FieldDivs>
      </div>
    );
  }
}

export default CreateNote;