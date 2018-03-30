import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';


class NoteCards extends Component {
    render() {
        return (
            <div className="NoteCards">
                <h3> Your Notes: </h3>
                {this.props.Notes.map(notes => {
                    return (
                    
                            <Card>
                                <div key={notes.noteNum} class="Card">
                                    <CardTitle> {notes.noteTitle}</CardTitle>
                                    <p>
                                        <CardText> {notes.noteContent}  </CardText>
                                    </p>
                                </div>
                            </Card>
                        
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        Notes: state.notes,
    };
};

export default connect(mapStateToProps)(NoteCards);