import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import { Markdown } from 'react-showdown';

class ListView extends Component {
    state = {
        notes: [],
    }

componentDidMount(){
    this.setState({ notes: this.props.notes})
}

handleFilter = (e) => {
    if (e.nativeEvent.inputType === "deleteContentBackward") this.setState({ notes: this.props.notes})
    else { const currentState = this.state.notes
    const newState = currentState.filter((note) => {
        if (note.title.toLowerCase().includes(e.target.value.toLowerCase())) return true;
        for (let i = 0; i < note.tags.length; i++) { 
            if(note.tags[i].name.toLowerCase().includes(e.target.value.toLowerCase())) return true;
        }
        return false;
    });
    this.setState({ notes: newState }) }
}

handleDrag = (e) => {
    console.log("dragon");
    console.log(e.target.id)
    // Add the target element's id to the data transfer object
    e.dataTransfer.setData("text/plain", e.target.id);
}

handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
}

handleDrop = (e) => {
    e.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = e.dataTransfer.getData("text");
    console.log(e.target.parentNode.parentNode.parentNode.className)
    e.target.appendChild(document.getElementById(data));
    console.log("dragoff");
}

    render() {
        return (
            <div className="ListView">
                <input className="ListView__input" type="text" placeholder="Find Note" onChange={this.handleFilter}></input>
                <h4 className="Title">Your Notes:</h4>
                <div className="ListCards" onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
                    {this.state.notes.map(((note, index) => {
                        return (
                            <div className="ListCard" key={note.id} id={note.id} draggable="true" onDragStart={this.handleDrag} style={{order: `${index}`}}>
                                <Link to={{pathname: `/notes/${ note.id }`, state: { currentNote: note }}}>
                                    <Card>
                                        <header className="ListCard__Header">{note.title} {note.tags.map(((tag, index) => { return(<span key={index} style={{background: `${tag.color}`, color: "white", borderRadius: "12%", padding: "1%"}}>{tag.name}</span>)}))}</header>
                                        <div className="ListCard__Body"><Markdown markup={note.text.length > 120 ? (note.text.substr(0, 124) + " ...") : (note.text)} strikethrough="true" tasklists="true" /></div>
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