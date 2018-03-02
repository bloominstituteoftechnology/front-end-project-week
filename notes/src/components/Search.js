import React, {Component} from 'react';
import styled from 'styled-components';
import {FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {search} from '../actions';

class Search extends Component {
    state = {
        criteria: '',
        searchHandler: '',
    };

    searchField = (e) => {
        const value = e.target.value;

        console.log('searchField event', value.length);
        if(value.length >= 3){

            setTimeout(() => {
                this.props.search(value, true)
            }, 800);

        }

        if(value.length === 0){
            this.props.search(value, false)
        }

        this.setState({
            [e.target.name]: value
        });
    };

    render() {
        return (
            <SearchContainer>

                <FormGroup>
                    <FormControl type="text" placeholder="Search"
                                 onChange={this.searchField} name={'criteria'}/>
                </FormGroup>

            </SearchContainer>
        )}
}

export default connect(null, {search})(Search);


const SearchContainer = styled.div`
        text-align:center;
`;