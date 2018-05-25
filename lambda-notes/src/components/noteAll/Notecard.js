import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Notecard extends Component {
    constructor(props) {
        super(props);
        this.state={updateSelectedNote: this.props.updateSelectedNote}
    }

    handleClickNote = () => {
        // console.log('UPDATE', this.props);
        this.state.updateSelectedNote({ title: this.props.title, content: this.props.content });
    }

    render() {
        console.log(this.props);
        const title = this.props.title
        const content = this.props.content
        return (
            <div className='col-12 d-flex flex-row align-items-start mt-3 mb-3'>
            <Card onClick={() => this.handleClickNote()}>
                <CardBody>
                    <CardTitle className='border-bottom border-dar text-left font-weight-bold cardtitle'>{title}</CardTitle>
                    <CardText className='text-left'>{content}</CardText>
                </CardBody>
            </Card>
            </div>
        )
    }
}

export default withRouter(Notecard);