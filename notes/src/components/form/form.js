import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FormContainer } from '../../style/style';

class Form extends Component {
  render() { 
    return ( 
      <FormContainer>
      <h1 className="form-title">Create new Note</h1>
      <form>
        <input type="text" name="title" placeholder="note title"/><br/>
        <textarea placeholder="note content"/><br/>
        <Button color="primary" size="lg"> Save</Button>
      </form>
      </FormContainer>
    );
  }
}
 
export default Form;