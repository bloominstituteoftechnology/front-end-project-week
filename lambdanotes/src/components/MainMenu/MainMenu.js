import React from 'react';
import './MainMenu.css'
import {Button, Row, Col} from 'reactstrap';
class MainMenu extends React.Component {

    render() {
        return(
            <div className='MainMenu'>
                <Row>
                    <Col>
                        <div className='MainMenu__header'>
                        <h2>Lambda Notes</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Button className='MainMenu__button' size='1lg'>View Your Notes</Button>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Button className='MainMenu__button'>+Create New Note</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default MainMenu;