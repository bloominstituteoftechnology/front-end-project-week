import React from 'react'
import { Card, CardTitle, CardBody} from 'reactstrap';
import './NoteCard.css'
class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Card className='NoteCard'>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardBody>{this.props.content}</CardBody>
                </Card>
            </div>
        );
    }
}
export default Note;