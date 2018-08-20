import React, { Component } from 'react'
import Note from './Note';
import { Input } from 'reactstrap';

class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            shownNotes: []
        }
    }

    componentDidMount = () => {
        this.props.fetchNotes();
        setTimeout(() => this.initializeData(), 1000);
    }

    searchInput = (event) => {
        let searchTerm = event.target.value;
        this.setState(() => {
            return ({ shownNotes: this.props.notes.filter(note => note.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)})
        });
    }

    initializeData = () => {
        this.setState({
            shownNotes: this.props.notes
        })
    }

    render() {
        if (this.props.fetchingNotes){
            return (<div></div>)
        }
        return (
            <div>
                <Input type="text" onChange={this.searchInput} />
                {this.state.shownNotes.map(note => {
                    return (
                        <div className="note" key={note._id}>
                            <Note id={note._id} title={note.title} content={note.textBody} tags={note.tags} /> 
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Notes;