import React, {Component} from 'react';
import styled from 'styled-components';
import {Row, Grid} from 'react-bootstrap';
import {connect} from 'react-redux';

class Details extends Component {

    componentDidMount() {
        console.log('this is the details to show:', this.props.note);
    }

    render() {
        return (
            <DetailsContainer>
                <Grid>
                    <Row className="show-grid">
                        <h3 className={'top-title'}>{this.props.note.title}</h3>
                    </Row>
                    <Row className="show-grid">
                        {this.props.note.description}
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

    border:0px solid black;
    
`;