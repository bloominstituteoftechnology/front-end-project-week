import React from 'react';
import styled from 'styled-components';
import {Form, Button} from 'reactstrap';

const Input = styled.input`
    width: 400px;
    margin: 1rem 0 0 1rem;
    border-radius: 2px;
    padding: 0.2rem;
`;
const Div = styled.div`
    background: #F1F1F1;
`;

class SearchBar extends React.Component{
    render(){
        return(
            <Form onSubmit={this.props.filterByTitle}>
                <Div>
                    <Input placeholder='Search by Title'
                            name='searchTitle'
                            value={this.props.searchTitle}
                            onChange={this.props.handleChange} />
                    <Button type='submit'
                            onClick={this.props.filterByTitle}
                            style={{background: 'lightgray',
                                    color: 'black',
                                    fontWeight: '700',
                                    border: 'none'}}>
                        Search
                    </Button><br />
                    <Input placeholder='Search by Content'
                            name='searchTextBody'
                            value={this.props.searchTextBody}
                            onChange={this.props.handleChange} />
                    <Button type='submit'
                            onClick={this.props.filterByTextBody}
                            style={{background: 'white',
                                    color: 'black',
                                    fontWeight: '500',
                                    borderColor: 'lightgray' }}>
                        Search
                    </Button>
                </Div>
            </Form>
        );
    }
}

export default SearchBar;