import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import allNotes from '../dummyData';
import { Link } from 'react-router-dom';


class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            neededData: [],
        }
    }

    componentDidMount() {
        this.setState( {neededData: allNotes} );
    }

    render() {
        return (
            <div className="NoteItems">
                <h5 className="NoteItemsTitle">You're Notes:</h5>
                <div className="NotesList">
                    {this.state.neededData.map(((eachNote, index) =>
                            <div className="NoteItem" key={index}>
                                <Link to ={{pathname: `/notes/${ index }}`, state: { currentView: eachNote } }}>
                                    <Card>
                                        <CardBody>
                                            <CardTitle> {eachNote.title} </CardTitle>
                                            <CardText> {eachNote.description} </CardText>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        )
                    )}
                    
                </div>
            </div>
        )
    }
    
}
export default NotesList