import React from 'react';
import {Button, Row, Col} from 'reactstrap';
class MainMenu extends React.Component {

    render() {
        return(
            <div className>
                <Row>
                    <Col>
                        <h2>Lambda Notes</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>View Your Notes</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>+Create New Note</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default MainMenu;