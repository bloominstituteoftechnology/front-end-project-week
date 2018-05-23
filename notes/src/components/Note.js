import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DeleteNote } from './index';
import './Note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col className="single-note">
                        <div className="edit-delete">
                            <Link to="/edit">
                                <div className="edit">edit</div>
                            </Link>
                            <DeleteNote />
                        </div>
                        <h1>Note Name</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis erat et laoreet tempor. Cras efficitur, nunc id egestas condimentum, metus nisi iaculis mi, id porttitor ipsum urna sed ante. Donec ac ex tempor, mattis ipsum at, faucibus nibh. Etiam pretium augue vel fringilla feugiat. Vivamus nec feugiat enim. Integer venenatis mi dignissim nisl pellentesque maximus. Suspendisse mollis lacinia eros non eleifend. Fusce porta nibh sed quam aliquet fermentum. Praesent ut lacus et nisl hendrerit luctus. Cras odio magna, semper ut faucibus vel, elementum vel tortor. Integer eleifend at enim non pulvinar. Quisque justo ipsum, vulputate ut suscipit non, semper ut arcu.</p>
                        <p>Phasellus a ipsum vitae turpis egestas dapibus. Nunc tempus metus erat, in consectetur odio aliquet non. Curabitur id varius quam, non pellentesque magna. Suspendisse lacinia convallis cursus. Etiam ut ex tellus. Curabitur dapibus, nibh in venenatis maximus, velit nisi varius leo, ac elementum lectus nunc blandit sem. Proin fermentum mauris vitae libero sodales iaculis non at purus. Praesent tristique nibh diam, id sollicitudin tellus ultricies vel.</p>
                    </Col>
                </Row>
            </Container>
         )
    }
}

export default Note;