import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';
  
const catIpsum = 'catIpsum';

class displayList extends Component {
    render(props) {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Note Title</CardTitle>
                        <CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default displayList;