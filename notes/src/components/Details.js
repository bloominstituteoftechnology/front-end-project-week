import React, {Component} from 'react';
import styled from 'styled-components';
import {Row, Grid, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import DeleteNote from './DeleteNote';
import {BrowserRouter as Route, Link} from "react-router-dom";

class Details extends Component {

    render() {
        return (
            <DetailsContainer>
                <Grid>
                    <Row className="show-grid">
                        <Col className="sub-lnks-container" md={12}>
                            <Link to={`/update/${this.props.note.key}`} className={'sub-links'} > edit </Link>
                            &nbsp;&nbsp;
                            <DeleteNote firebaseKey={this.props.note}/>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col>
                            <h3 className={'top-title'}>{this.props.note.title}</h3>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col>
                            <img align={'left'} className={'image-detail'} alt={this.props.note.title} src={this.props.note.image}/>
                            {this.props.note.description}
                        </Col>
                    </Row>
                </Grid>
            </DetailsContainer>
        )}
}

const mapStateToProps = state => {
    const {notes_reducer} = state;
    return {
        note: notes_reducer.singleNote,
    }
};

export default connect(mapStateToProps, {})(Details);

const DetailsContainer = styled.div`
   
    .sub-lnks-container{
        text-align:right;
        padding:0px 15px 0px auto;
    }
    .image-detail{
        border:4px solid white;
        margin-right:15px;
    }
    
`;