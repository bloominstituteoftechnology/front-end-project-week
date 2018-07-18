import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
    CreateNote,
    DeleteNote,
    EditNote,
    ListView,
    SideBar,
    ViewNote
} from '../../components';


class MainContainer extends Component {
    state = {
        notes : [
            {
                id : 1528050555834,
                title : "First Title",
                body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                id : 1528050555844,
                title : "Second Title",
                body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                id : 1528050555854,
                title : "Third Title",
                body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                id : 1528050555864,
                title : "Fouth Title",
                body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                id : 1528050555874,
                title : "Fifth Title",
                body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                id : 1528050555884,
                title : "Sixth Title",
                body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                id : 1528050565864,
                title : "Fouth Title",
                body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                id : 1528050575874,
                title : "Fifth Title",
                body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                id : 1528050585884,
                title : "Sixth Title",
                body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
        ]
    }
    render() {
        return (
            <Router>
                <div className = 'app-Container'>
                        <SideBar />
                        <Route exact path='/' render={ props => <ListView {...props} notes={this.state.notes} /> } />
                        <Route path='/create' component={CreateNote} />
                        <Route path='/edite'  component={EditNote} />

                </div>
            </Router>
        );
    }
}

export default MainContainer;