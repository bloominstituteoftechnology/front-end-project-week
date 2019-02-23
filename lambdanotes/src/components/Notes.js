import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import ViewNote from './ViewNote.js'
import ListView from './ListView.js';

import CreateNote from './CreateNote.js'
import DeleteNote from './DeleteNote.js'
import EditNote from './EditNote.js'


const ContentContainer = styled.div`
    display: table-cell;
    max-width: 450px;
    vertical-align: top;
    padding-left: 30px;
`

class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            loading: true,
        }
    }

    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState({
                    notes: response.data,
                    loading: false,
                });
            })
            .catch(err => console.log(err));
    }

    refresh = response => {
        window.location.reload();
    }

    render() {
        return (
            <ContentContainer>
                <Route 
                    path='/' 
                    exact
                    render={props => 
                        <ListView {...props} notes={this.state.notes} loading={this.state.loading}/>
                    } 
                />

                <Route
                    path={`/notes/:id`}
                    render={props =>
                        <ViewNote {...props} toggleDeleteScreen={this.toggleDeleteScreen} refresh={this.refresh}/>
                    }
                />

                <Route
                    path={`/create`}
                    render={props =>
                        <CreateNote {...props} refresh={this.refresh}/>
                    }
                />

                <Route 
                    path={`/edit/:id`}   
                    render={props =>
                        <EditNote {...props} refresh={this.refresh}/>
                    }
                />

                <Route
                    path={`/notes/delete/:id`}
                    render={props =>
                        <DeleteNote {...props} refresh={this.refresh}/>
                    }
                />
            </ContentContainer>
        )
    }
}

export default Notes; 
