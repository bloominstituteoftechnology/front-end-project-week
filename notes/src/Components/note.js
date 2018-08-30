import  {Component, React} from 'react';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';

//import axios from 'axios';

export default class Note extends Component {
    constructor(props) {
        super(props) 
        console.log("This is note" + props);
    }
render() {
    console.log('the state is ' + this.state)
    return(
        <div>
            testing
    </div>

    )
}
}