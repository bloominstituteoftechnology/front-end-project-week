import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';




class ListView extends Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes })
    }

    // handleFilter = (e) => {
    //     if (e.nativeEvent.inputType === "deleteContentBackward") this.setState({ notes: this.props.notes})
    //     else { const currentState = this.state.notes
    //     const newState = currentState.filter((note) => note.title.toLowerCase().includes(e.target.value.toLowerCase()));
    //     this.setState({ notes: newState })}
    // }

    render() {
        return (
            <div className="ListView">
            {/* <input className="ListView__input" type="text" placeholder="Find Note" onChange={this.handleFilter}></input> */}
            <h4 className="Title">Your Notes:</h4>
                <div className="ListCards">
                    {this.state.notes.map(((note) => {
                        return (
                            <div className="ListCard" key={note.id}>
                                <Link className="LinkList" to={{pathname: `/notes/${ note.id }`, state: { currentNote: note }}}>
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



