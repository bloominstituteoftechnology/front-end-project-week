import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Notes from './components/Notes'
import {Row, Grid, Col} from 'react-bootstrap';
import styled from 'styled-components';
import CreateNewNoteForm from './components/CreateNewNoteForm'
import Search from './components/Search'
import Details from './components/Details';
import UpdateNote from './components/UpdateNote';
import SearchResults from './components/SearchResults';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            <AppContainer>
                <Router>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} md={3} className={"sidebar"}>

                                <div className={'title-side'}>
                                    Lambda Notes
                                </div>

                                <div className={'btn-side'}>
                                    <Link to="/" className={"btn-text"}> View Your Notes </Link>
                                </div>

                                <div className={'btn-side'}>
                                    <Link to="/create_new_note" className={"btn-text"}> + Create New Note</Link>
                                </div>

                            </Col>
                            <Col xs={12} md={9} className={"components-container"}>
                                {this.props.searching
                                    ?   <SearchResults/>
                                    :
                                        <div>
                                            <Route exact path="/" component={Notes} />
                                            <Route path="/create_new_note" component={CreateNewNoteForm} />
                                            <Route path="/details/:id" component={Details} />
                                            <Route path="/update/:id" component={UpdateNote} />
                                        </div>
                                }

                            </Col>
                            <Col xs={12} md={4} className={"top-bar-container"}>
                                <Search/>
                            </Col>

                        </Row>

                    </Grid>
                </Router>
            </AppContainer>

        );
    }
}


const mapStateToProps = state => {
    const {notes_reducer} = state;
    return {
        searching: notes_reducer.searching,
    }
};
export default connect(mapStateToProps, {})(App);


const AppContainer = styled.div`

    font-family: verdana;
    font-stretch: condensed;
        
        .top-bar-container{
            border:0px solid black;
            position:absolute;
            height:40px;
            margin-left:20%;
            top:15px;
            padding-left:22px;
        }
    
        .sidebar {
            border:1px solid #A0A0A0;
            background-color: #d8d8d8;
            padding:18px;
            text-align:center;
            font-weight: bold;


                .title-side{
                    text-align:left;
                    color:#4a4a4a;
                    font-size:40px;
                    line-height: 0.9em;
                    margin-bottom:30px;
                    font-stretch: condensed;
                }
        }
        
        .components-container{
            border:1px solid #C2C2C2;
            background-color: #f3f3f3;
            padding-top:60px;
            min-height: 750px;
        }
`;