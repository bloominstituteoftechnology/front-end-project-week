import React from 'react';
import { connect } from 'react-redux';
import Register from './register';
import SignIn from './login';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
    return {};
}

class LoginRegister extends React.Component{
    render() {
      //console.log("Props in loginRegister:",this.props);
        return(
            <Container fluid = {true} className = "App">
            <Row className="app-wrapper">
              <Col sm = {3} className = "leftSide position-fixed">
                <h1 className = "header my-4">Lambda Notes</h1>
                <SignIn {...this.props}/>
              </Col>
              <Col sm = {9} className = "rightSide offset-3">
                <Register {...this.props}/>
              </Col>
            </Row>
          </Container>
        )
    }
}
Container.propTypes = {
    fluid: PropTypes.bool
  };
export default connect(mapStateToProps)(LoginRegister);