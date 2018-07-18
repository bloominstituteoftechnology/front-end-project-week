import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  &:focus{
    outline: 3px solid #2BC1C4;
  }
`

const StyledTextArea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  width:100%;
  height:346px;
  padding: 20px 20px;
  border: 1px solid #979797;
  border-radius: 3px;
  font-size: 1.4rem;
  line-height: 25px;
  &:focus{
    outline: 3px solid #2BC1C4;
  }
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
  &:hover{
    cursor:pointer;
  }
  &:focus{
    outline: none;
  }
`


class EditNote extends Component {
  constructor(props){
    super(props)
    this.title = React.createRef()
    this.textBody = React.createRef()
    this.state = {
      title: props.title,
      content: props.textBody,
      isTitleChanged:false,
      isContentChanged:false,
    }
  }

  updateTitle = () =>{
    (this.state.title === this.title.value) ? this.setState({isTitleChanged:false}) : this.setState({isTitleChanged:true})
  }
  
  updateContent = () => {
    (this.state.content === this.textBody.value) ? this.setState({isContentChanged:false}) : this.setState({isContentChanged:true})
  }
  
  render() {
    return (
      <div>
        <Header>Edit Note:</Header>
        <FieldDivs>
          <StyledInput onChange={this.updateTitle} innerRef={x => {this.title = x}} type="text" defaultValue={this.props.title}/>
        </FieldDivs>
        <FieldDivs>
          <StyledTextArea onChange={this.updateContent} innerRef={x => {this.textBody = x}} defaultValue={this.props.textBody}/>
        </FieldDivs>
        <FieldDivs>
          { (this.state.isTitleChanged || this.state.isContentChanged) ? <Link to="/view-notes"><BaseButton onClick={() => this.props.editNote(this.props.id,this.title.value, this.textBody.value)}> Save </BaseButton></Link> : null}
        </FieldDivs>
      </div>
    );
  }
}

export default EditNote;