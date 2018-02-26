import React, {Component} from 'react';
// import CreateSmurfForm from './CreateSmurfForm'
import {Table, Grid, Col} from 'react-bootstrap';
// import {showCreateForm} from '../actions'
import styled from 'styled-components';
// import {connect} from 'react-redux';
// import ActionButtons from '../components/ActionButtons';
import axios from 'axios';

class Notes extends Component {


    componentDidMount() {

        const notes = axios.get('http://localhost:3333/notes/')
                            .then(response => {

            console.log('response.data',response.data)

        }).catch(err => {
                console.log('err.err', err)
        });

        console.log('this are the notes', notes.data);
    }



    render() {
        return (
            <Grid>
                <Col>
                    his are the notes come one people
                </Col>
            </Grid>
        );
    }

}

export default Notes;


