import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import HomeLeftPanel from './HomeLeftPanel';

const StyledNote = styled.div`
    display: flex;
`;



class SingleNoteView extends React.Component {
        render() {
            console.log('this is this.props', this.props)
        return (
            <StyledNote >
            <HomeLeftPanel />
            
                <Col sm="4" className="mb-3" key={this.props.match.params.id}>
                    <Card>
                        <CardBody key={this.props.match.params.id}>
                            <CardTitle >CardTitle</CardTitle>
                            <CardText >CardText</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </StyledNote >
        )
    }
}
  const mapStateToProps = (state) => {
    return {
      notes: state
    };
  };
  
  export default connect(mapStateToProps, { })(SingleNoteView);