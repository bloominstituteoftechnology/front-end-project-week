import React, {Component} from 'react';
import styled from 'styled-components';
// import {FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {search} from '../actions';

class SearchResults extends Component {


    render() {
        return (
            <SearchResultsContainer>

                Searching...

            </SearchResultsContainer>
        )}
}

export default connect(null, {search})(SearchResults);


const SearchResultsContainer = styled.div`
        text-align:center;
`;