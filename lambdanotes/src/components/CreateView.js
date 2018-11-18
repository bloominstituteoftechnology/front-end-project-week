import React, { Component } from 'react';
import Container from './styles/Container';
import Wrapper from './styles/Wrapper';
import Input from './styles/Input';

class CreateView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
               <Wrapper>
                <h2>Create New Note:</h2>
                <Container>
                  <form>
                      <Input></Input>
                      <textarea rows="30" cols="150"></textarea>
                  </form>
                </Container>
               </Wrapper>  
            </>
        );
    }
}

export default CreateView;
