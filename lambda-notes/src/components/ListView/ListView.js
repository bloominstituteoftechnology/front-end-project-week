// React and Router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { get_notes } from '../../actions';

// Styling
import { Col,
    Card,
    CardBody,
    CardHeader,
    CardText } from "reactstrap";
import './ListView.css';

class ListView extends Component {
    componentDidMount() {
        this.props.get_notes();
    }
    render() {
        return (
            <Col className='pt-5'
                style={{backgroundColor: '#f2f1f2'}}>
                <h5>Your Notes:</h5>
                <div className='list-container'>
                    {this.props.notes.map(note => {
                        const notePropsAndPath = {
                            pathname: `/notes/${note.id}`,
                            id: note.id,
                            title: note.title,
                            content: note.content
                        };
                        return (
                            <Link to={notePropsAndPath} key={`${note.id} ${note.title}`}
                                className='mt-3 mb-1'>
                                <Card className='card'>
                                    <CardBody className='cardbody px-3 pt-0'>
                                        <CardHeader className='cardheader mb-1 px-0 pt-2 pb-0'>
                                            {note.title}
                                        </CardHeader>
                                        <CardText>
                                            {note.content}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </Col>
        );
    } // end of render()
}; // end of ListView

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps, { get_notes })(ListView);