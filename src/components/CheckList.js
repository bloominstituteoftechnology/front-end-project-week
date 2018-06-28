import React from 'react';
import { Row, Col, FormGroup, Input, Label } from 'reactstrap';

const CheckList = (props) => {

    return (
        <Row className="single-note">
            <Col sm="12" xl="9">
                <h3 className="heading">CheckList:</h3>
                <FormGroup check className="check-list">
                    {props.checklist.map(value => {
                        return (
                            <Label check className="checkbox" key={value}>
                                <Input type="checkbox"/>{' '}
                                {value}
                            </Label>
                        )
                    })}
                </FormGroup>
            </Col>
        </Row>
    )

}
 
export default CheckList;