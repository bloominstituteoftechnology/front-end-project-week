import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardColumns } from 'reactstrap';
import { connect } from 'react-redux';


class NoteCards extends Component {
    render() {
        return (
            <div className="cardList">
                <h3> Your Notes: </h3>
                {this.props.Notes.map(notes => {
                    return (
                        <CardColumns>
                            <Card>
                                <div key={notes.noteNum} class="CardColumn">
                                    <CardTitle> {notes.noteTitle}</CardTitle>
                                    <p>
                                        <CardText> {notes.noteContent}  </CardText>
                                    </p>
                                </div>
                            </Card>
                        </CardColumns>
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