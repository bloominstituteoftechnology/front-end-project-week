import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Notecard extends Component {
    constructor(props) {
        super(props);
        this.state={updateSelectedNote: this.props.updateSelectedNote}
    }

    handleClickNote = () => {
        this.state.updateSelectedNote({ title: this.props.title, content: this.props.content});
    }

    render() {
        return (
            <div className='col-12 d-flex flex-row align-items-start mt-3 mb-3'>
            <Card onClick={() => this.handleClickNote()}>
                <CardBody>
                    <CardTitle className='border-bottom border-dar text-left font-weight-bold cardtitle'>Note Title</CardTitle>
                    <CardText className='text-left'>Content</CardText>
                </CardBody>
            </Card>
            </div>
        )
    }
}

export default Notecard;