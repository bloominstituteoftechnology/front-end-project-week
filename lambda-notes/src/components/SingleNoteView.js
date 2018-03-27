import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';

const StyledNote = styled.div`
`;



class SingleNoteView extends React.Component {
        render() {
            console.log('this is this.props', this.props)
        return (
            <StyledNote >
                <Col sm="4" className="mb-3" key={this.props.match.params.id}>
                    <Card>
                        <CardBody key={this.props.match.params.id}>
                            <CardTitle name={this.props.match.params.title} >{}</CardTitle>
                            <CardText body={this.props.match.params.text} ></CardText>
                        </CardBody>
                    </Card>
                </Col>
            </StyledNote >
        )
    }
}
  const mapStateToProps = (state) => {
      
    return {
      notes: state.notes,
    };
    console.log('This is NOTES', state.notes)
  };
  
  export default connect(mapStateToProps, { })(SingleNoteView);