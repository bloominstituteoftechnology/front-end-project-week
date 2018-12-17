import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import ViewNote from './Viewnote.js'
import ListView from './Listview.js';


const ContentContainer = styled.div`
    display: table-cell;
    width: 85%;
    vertical-align: top;
    padding-left: 3%;
    padding-top: 4%;
`

class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [
            ]
        }
    }

    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState({
                    notes: response.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <ContentContainer>
                <Route 
                    path='/' 
                    exact
                    render={props => 
                        <ListView {...props} notes={this.state.notes}/>
                    } 
                />
                <Route
                    path={`/notes/:id`}
                    render={props =>
                        <ViewNote {...props}/>
                    }
                />
            </ContentContainer>
        )
    }
}

export default Notes; 