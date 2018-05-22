//Here is my local useful snippets repository. 


//NoteCard reactstrap 

import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
    return (
    <Row>
        <Col sm="6">
        <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
        </Card>
        </Col>
        <Col sm="6">
        <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
        </Card>
        </Col>
    </Row>
    );
};

export default Example;



//Pretty sure I need to wrap the app like this example, on the index.js file.

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)
