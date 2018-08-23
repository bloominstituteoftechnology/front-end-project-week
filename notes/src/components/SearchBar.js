import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 400px;
    margin: 1rem;
    border-radius: 10px;
    padding: 0.2rem;
`;
const Div = styled.div`
    background: #F1F1F1;
`;

class SearchBar extends React.Component{
    render(){
        return(
            <Div>
                <Input placeholder='Search by Title'
                        name='searchTitle'
                        value={this.props.searchTitle}
                        onEnter={this.props.filterByTitle}
                        onChange={this.props.handleChange} />
                <button onClick={this.props.filterByTitle}>
                    Search
                </button>
                {/* <Input placeholder='Search by Title'
                        name='searchTitle'
                        value={this.props.searchTitle}
                        onEnter={this.props.filter}
                        onChange={this.props.handleChange} />
                <button onClick={this.props.filter}>
                    Search
                </button> */}
            </Div>
        );
    }
}

export default SearchBar;