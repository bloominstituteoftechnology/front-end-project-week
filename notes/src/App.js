import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Notes from './components/Notes'
import {Row, Grid, Col} from 'react-bootstrap';
import styled from 'styled-components';
import CreateNewNoteForm from './components/CreateNewNoteForm'


// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.url}/:topicId`} component={Topic} />
//         <Route
//             exact
//             path={match.url}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );
//
// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId} topics</h3>
//     </div>
// );


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

                            <Route exact path="/" component={Notes} />
                            <Route path="/create_new_note" component={CreateNewNoteForm} />

                        </Col>
                    </Row>
                </Grid>
            </Router>
            </AppContainer>

        );
    }
}

export default App;


const AppContainer = styled.div`

    font-family: verdana;
    font-stretch: condensed;
    
        .sidebar {
            border:1px solid #A0A0A0;
            background-color: #D0CFD0;
            padding:18px;
            text-align:center;
            font-weight: bold;


                .title-side{
                    text-align:left;
                    color:393939;
                    font-size:40px;
                    line-height: 0.9em;
                    margin-bottom:30px;
                    font-stretch: condensed;
                }
        }
        
        .components-container{
            border:1px solid #C2C2C2;
            background-color: #F0F0F0;
            padding-top:40px;
            min-height: 750px;
        }
`;