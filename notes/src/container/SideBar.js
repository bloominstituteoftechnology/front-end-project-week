import React, {Component} from 'react';
import {Grid, Col} from 'react-bootstrap';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Notes from '../components/Notes'

class SideBar extends Component {
    render() {
        return (
            <SideBarContainer>
                <Grid>
                    <Col>


                        side bar



                    </Col>
                </Grid>
            </SideBarContainer>
        );
    }

}

export default SideBar;

const SideBarContainer = styled.div`

    border:3px solid black;
    
`;