import React from 'react';
import PropTypes from 'prop-types';

class AllNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNotes: []
        }
    }

    componentDidMount() {
        console.log("this.props.notesData", this.props.notesData)
        console.log("this.state.currentNotes (before setState)", this.state.currentNotes)
            this.setState({ currentNotes: this.props.notesData }, () => console.log("this.state.currentNotes (after setState", this.currentNotes))
        console.log("this.props.location.state:", this.props.location.state);
    }

    componentDidUpdate(prevProps) {
        if(JSON.stringify(this.props.notesData) !== JSON.stringify(prevProps.notesData)) {
            this.setState({ currentNotes: this.props.notesData })
        }
     }

    showAll() {
        this.setState({ currentNotes: this.props.notesData })
    }

    filterByTag(tag) {
        if (this.state.currentNotes) {
        console.log("inside filter")
        const filteredNotes = this.props.notesData.filter(note => note.tags.includes(tag));
        this.setState({ currentNotes: filteredNotes })
        console.log("filtered", filteredNotes);
        }
    }

    render() {
        if (!this.props.notesData || !this.props.notesData.length) {
            return (
                <div><h3>You don't have any Notes yet. :(</h3>
                    <p>Try adding a new Note by clicking the <strong>+ Create New Note</strong> button! :)</p></div>
            )
        }

        return (

            
        
            <div className="notes-list-wrapper">
            <h3>Your Notes:</h3>
                <div className="filter">
                <h5 className="show-all" onClick={() => this.showAll()}>Show All Notes</h5>
                <div className="by-tag"><h5>Filter by tag:</h5> {this.props.notesData.map(note => {
                    return note.tags.map(tag => (
                        <h6 onClick={() => this.filterByTag(tag)}>{tag}</h6>
                    ))
                })}
                </div>
    
    
                </div>
                <div className="all-notes">
                {  
                    this.state.currentNotes.map(note => (
                    <div className="note-card" key={note._id} onClick={() => this.props.history.push(`notes/${note._id}`)}>
                        <h4>
                        {this.props.truncateTitle(note.title)}
                        </h4>
                        <p>{this.props.truncate(note.textBody)}</p>
                    </div> 
                ))
                
                }
                </div>
            </div>
        )

    }
}

// function AllNotes(props) {
//     if (!props.notesData || !props.notesData.length) {
//         return (
//         <div><h3>You don't have any Notes yet. :(</h3>
//             <p>Try adding a new Note by clicking the <strong>+ Create New Note</strong> button! :)</p></div>
//         )
//     };

    


//     return (
        
//         <div className="notes-list-wrapper">
//         <h3>Your Notes:</h3>
//             <div className="filter">
//             <h5>Filter by tag:</h5> {props.notesData.map(note => {
//                 return note.tags.map(tag => (
//                     <h6 onClick={() => props.filterByTag()}>{tag}</h6>
//                 ))
//             })}



//             </div>
//             <div className="all-notes">
//             {props.notesData.map(note => (
//                 <div className="note-card" key={note._id} onClick={() => props.history.push(`notes/${note._id}`)}>
//                     <h4>
//                     {props.truncateTitle(note.title)}
//                     </h4>
//                     <p>{props.truncate(note.textBody)}</p>
//                 </div> 
//             ))}
//             </div>
//         </div>
//     )
// }

AllNotes.propTypes = {
    notesData: PropTypes.array,
    history: PropTypes.shape({
        push: PropTypes.func
    })
}

export default AllNotes;