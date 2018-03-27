import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';

class ListView extends Component {
    state = {
        notes: [],
    }

componentDidMount(){
    this.setState({ notes: this.props.notes})
}

    render() {
        return (
            <div className="ListView">
                <h4 className="Title">Your Notes:</h4>
                <div className="ListCards">
                    {this.state.notes.map(((note) => {
                        return (
                            <div className="ListCard" key={note.id}>
                                <Link to={{pathname: `/notes/${ note.id }`, state: { currentNote: note }}}>
                                    <Card>
                                        <header className="ListCard__Header">{note.title}</header>
                                        
                                        <body className="ListCard__Body">{note.text}</body>
                                        
                                    </Card>
                                </Link>
                            </div>
                        )
                    }))}
                </div>
            </div>
        );
    }
}

export default ListView;