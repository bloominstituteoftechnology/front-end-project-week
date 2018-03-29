import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import { Markdown } from 'react-showdown';



class ListView extends Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes })
    }

    handleFilter = (e) => {
        if (e.nativeEvent.inputType === "deleteContentBackward") this.setState({ notes: this.props.notes})
        else { const currentState = this.state.notes
        const newState = currentState.filter((note) => note.title.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({ notes: newState })}
    }

    render() {
        return (
            <div className="ListView">
            {/* <input className="ListView__input" type="text" placeholder="Find Note" onChange={this.handleFilter}></input> */}
            <h4 className="Title">Your Notes</h4>
                <div className="ListCards">
                    {this.state.notes.map(((note) => {
                        return (
                            <div className="ListCard" key={note.id}>
                                <Link to={{pathname: `/notes/${ note.id }}`, state: { currentNote: note }}}>
                                    <Card>
                                        <header className="ListCard__Header">{note.title}</header>
                                        <div className="ListCard__Body"><Markdown markup={note.text.length > 120 ? (note.text.substr(0, 124) + "..."): (note.text)} strikethrough="true" tasklists="true" /></div>
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



