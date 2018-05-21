import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardBody, Table } from 'reactstrap';
  
const catIpsum = 'Plop down in the middle where everybody walks play time, and run in circles, or eat too much then proceed to regurgitate all over living room carpet while humans eat dinner yet pounce on unsuspecting person and drool or stare out the window. Lick master\'s hand at first then bite because im moody touch water with paw then recoil in horror, scratch me there, elevator butt stare out the window ignore the human until she needs to get up, then climb on her lap and sprawl walk on car leaving trail of paw prints on hood and windshield. With tail in the air. Nap all day relentlessly pursues moth lick arm hair so lie in the sink all day. Mice kitty kitty that box? i can fit in that box.';

class displayList extends Component {
    render() {
        return (
            <div>
            <p>Your Notes:</p>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Note Title</CardTitle>
                                        <CardText>{catIpsum}</CardText>
                                    </CardBody>
                                </Card>
                            </td>
                            <td>
                            <Card>
                                <CardBody>
                                    <CardTitle>Note Title</CardTitle>
                                    <CardText>{catIpsum}</CardText>
                                </CardBody>
                            </Card>
                        </td>
                        <td>
                        <Card>
                            <CardBody>
                                <CardTitle>Note Title</CardTitle>
                                <CardText>{catIpsum}</CardText>
                            </CardBody>
                        </Card>
                    </td>
                            
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default displayList;