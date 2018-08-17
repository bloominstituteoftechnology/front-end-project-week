import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class NoteCard extends Component {
    state = {
        updateCurrentNote: this.props.updateCurrentNote
    }

    handleClickNote = () => {
        this.state.updateCurrentNote({
            title: this.props.title,
            content: this.props.content
         });
    }

    render() {
        return (
            <div className='col-12 d-flex flex-row align-items-start mt-3 mb-3'>   
                <Card className='Note-Card'>
                    <CardBody>
                        <CardTitle className='border-bottom border-dark text-left font-weight-bold cardtitle'>Note Title</CardTitle>
                        <CardText className='text-left'>{this.props.content}</CardText>
                    </CardBody>
                </Card>     
            </div>
        );
    }
};

export default withRouter(NoteCard);