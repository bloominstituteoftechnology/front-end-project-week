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
    else { const currentState = this.state.notes;
    const newState = currentState.filter((note) => {
        if (note.title.toLowerCase().includes(e.target.value.toLowerCase())) return true;
        for (let i = 0; i < note.tags.length; i++) { 
            if(note.tags[i].name.toLowerCase().includes(e.target.value.toLowerCase())) return true;
        }
        return false;
    });
    this.setState({ notes: newState }) }
}

sortA = () => {
    // const currentState = this.state.notes;
}

sortZ = () => {
    // const currentState = this.state.notes;
}

handleDrag = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
}

handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
}

handleDrop = (e) => {
    e.preventDefault();
    const targetParent = e.target.parentNode.parentNode.parentNode;
    if(targetParent.className === "ListCard") {
        const newOrder = targetParent.style.order;
        const data = e.dataTransfer.getData("text");
        const dragItem = document.getElementById(data);
        const oldOrder = dragItem.style.order;
        targetParent.style.order = `${oldOrder}`;
        dragItem.style.order = `${newOrder}`;
    }
}

    render() {
        return (
            <div className="ListView">
                <div className="ListView__nav">
                    <input className="ListView__input" type="text" placeholder="Search Note Title/Tags" onChange={this.handleFilter}></input>
                    <div style={{margin: "0 3%", width: '140px', display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                        Sort:
                        <button onClick={this.sortA} className="ExtraButton">A-z</button>
                        <button onClick={this.sortZ} className="ExtraButton">Z-a</button>
                    </div>
                </div>
                <h4 className="Title">Your Notes:</h4>
                <div className="ListCards" onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
                    {this.state.notes.map(((note, index) => {
                        return (
                            <div className="ListCard" key={note._id} id={note._id} draggable="true" onDragStart={this.handleDrag} style={{order: `${index}`}}>
                                <Link to={{pathname: `/notes/${ note._id }`, state: { currentNote: note }}}>
                                    <Card>
                                        <header className="ListCard__Header">{note.title} {note.tags.map(((tag, index) => { return(<span key={index} style={{background: `${tag.color}`, color: "white", borderRadius: "12%", padding: "1%"}}>{tag.name}</span>)}))}</header>
                                        <div className="ListCard__Body"><Markdown markup={note.content.length > 120 ? (note.content.substr(0, 124) + " ...") : (note.content)} strikethrough="true" tasklists="true" /></div>
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