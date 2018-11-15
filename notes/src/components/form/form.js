import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FormContainer } from '../../style/style';

class Form extends Component {
  render() { 
    console.log(this.props)
    return ( 
      <FormContainer>
      <h1 className="form-title">Create new Note</h1>
      <form>
        <input type="text" name="title" placeholder="note title" value={this.props.value} onChange={this.props.update}/><br/>
        <textarea placeholder="note content" name="content" onChange={this.props.update}/><br/>
        <Button color="primary" size="lg" onClick={this.props.submit}> Save</Button>
      </form>
      </FormContainer>
    );
  }
}
 
export default Form;