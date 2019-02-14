import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FormContainer } from '../../style/style';

class Form extends Component {

  goto = () =>{
    this.props.history.push('/')
  }

  render() { 
    console.log(this.props)
    return ( 
      <FormContainer>
      <h1 className="form-title">Create new Note &nbsp;|<Button color="link" onClick={this.goto}>Back</Button></h1>
      <form>
        <input type="text" name="title" placeholder="note title" value={this.props.value} onChange={this.props.update}/><br/>
        <textarea placeholder="note content" name="textBody" onChange={this.props.update}/><br/>
        <Button color="primary" size="lg" onClick={this.props.submit}> Save</Button>
      </form>
      </FormContainer>
    );
  }
}
 
export default Form;