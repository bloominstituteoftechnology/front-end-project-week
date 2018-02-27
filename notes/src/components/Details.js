import React, {Component} from 'react';
import styled from 'styled-components';
import {Row, Grid, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import DeleteNote from './DeleteNote';

class Details extends Component {
    render() {
        return (
            <DetailsContainer>
                <Grid>
                    <Row className="show-grid">
                        <Col className="sub-lnks-container" md={12}>
                            <span className={'sub-links'}> edit </span>
                            &nbsp;&nbsp;
                            <DeleteNote noteId={this.props.note.id}/>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col>
                            <h3 className={'top-title'}>{this.props.note.title}</h3>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col>
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
    
`;