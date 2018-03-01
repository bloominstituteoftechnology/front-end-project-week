import React, {Component} from 'react';
import styled from 'styled-components';
import {FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {search} from '../actions';

class Search extends Component {
    state = {
        criteria: '',
    };

    updateField = (e) => {

        if(e.target.value.length > 0){

            this.props.search(e.target.value, true);

        }else{

            this.props.search(e.target.value, false);

        }

        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <SearchContainer>

                <FormGroup>
                    <FormControl type="text" placeholder="Search"
                                 onChange={this.updateField} name={'criteria'}/>
                </FormGroup>

            </SearchContainer>
        )}
}

export default connect(null, {search})(Search);


const SearchContainer = styled.div`
        text-align:center;
`;