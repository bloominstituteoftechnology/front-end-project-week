import React, { Component } from 'react';
import { Button, Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styling/notedisplay.css';

class Notesdisplay extends Component {
    render() {
        return (
            <div className= 'viewpage'>
                <h3 className= 'yournotes'>Your Notes:</h3>
                    <div className= 'notes'>
                        <Card className= 'note'>
                            <CardBody className= 'notebody'>
                                <CardTitle className= 'notetitle'>Note Title</CardTitle>
                                <hr className= 'break'/>
                                    <CardText className= 'notetext'>This will contain information or gibberishness</CardText>
                            </CardBody>
                        </Card>
                        <Card className= 'note'>
                            <CardBody className= 'notebody'>
                                <CardTitle className= 'notetitle'>Note Title</CardTitle>
                                <hr className= 'break'/>
                                    <CardText className= 'notetext'>This will contain information or gibberishness</CardText>
                            </CardBody>
                        </Card>
                        <Card className= 'note'>
                            <CardBody className= 'notebody'>
                                <CardTitle className= 'notetitle'>Note Title</CardTitle>
                                <hr className= 'break'/>
                                    <CardText className= 'notetext'>This will contain information or gibberishness
                                        for as lengthy as I want it to be because this is my own
                                        react app and I'm simply testing to see how it will look
                                    </CardText>
                            </CardBody>
                        </Card>
                        <Card className= 'note'>
                            <CardBody className= 'notebody'>
                                <CardTitle className= 'notetitle'>Note Title</CardTitle>
                                <hr className= 'break'/>
                                    <CardText className= 'notetext'>This will contain information or gibberishness</CardText>
                            </CardBody>
                        </Card>
                        <Card className= 'note'>
                            <CardBody className= 'notebody'>
                                <CardTitle className= 'notetitle'>Note Title</CardTitle>
                                <hr className= 'break'/>
                                    <CardText className= 'notetext'>This will contain information or gibberishness,
                                    I simply wish to see how this affects the layout of my cards
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className= 'note'>
                            <CardBody className= 'notebody'>
                                <CardTitle className= 'notetitle'>Note Title</CardTitle>
                                <hr className= 'break'/>
                                    <CardText className= 'notetext'>This will contain information or gibberishness</CardText>
                            </CardBody>
                        </Card>
                        <Card className= 'note'>
                            <CardBody className= 'notebody'>
                                <CardTitle className= 'notetitle'>Note Title</CardTitle>
                                <hr className= 'break'/>
                                    <CardText className= 'notetext'>This will contain information or gibberishness</CardText>
                            </CardBody>
                        </Card>
                        <Card className= 'note'>
                            <CardBody className= 'notebody'>
                                <CardTitle className= 'notetitle'>Note Title</CardTitle>
                                <hr className= 'break'/>
                                    <CardText className= 'notetext'>This will contain information or gibberishness
                                    fsddsfdsfdsfsdfsd</CardText>
                            </CardBody>
                        </Card>
                        <Card className= 'note'>
                            <CardBody className= 'notebody'>
                                <CardTitle className= 'notetitle'>Note Title</CardTitle>
                                <hr className= 'break'/>
                                    <CardText className= 'notetext'>This will contain information or gibberishness</CardText>
                            </CardBody>
                        </Card>
                    </div>
            </div>
        );
    };
}

export default Notesdisplay;