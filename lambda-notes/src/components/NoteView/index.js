import React from 'react' 
import { H1, UnderLinedP, NoteOptions, Button } from '../StyledComponents';
import { Link } from 'react-router-dom'
class NoteView extends React.Component{
    state = {
        notesAdded: false,
        title: 'Note Title',
        content: 'Note Content',
        id: null,
        modal: false
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchNote(id)
        this.setState({
            id: id
        })
    }

    onDelete = () => {
        this.props.deleteNote(this.state.id)
        this.props.history.push('/')
    }

    render() {
        if (!this.state.notesAdded){
            if (this.props.notes.length > 0){
                const notes = this.props.notes.filter(note => note._id == this.state.id)[0]
                this.setState({
                    title: notes.title,
                    content: notes.textBody,
                    notesAdded: true
                })
            }
            return (<div className="appView">Loading..</div>)
        }else {
            return (
                <div className="appView">
                    <NoteOptions>
                        <Link to={`/notes/update/${this.state.id}`}><UnderLinedP>edit</UnderLinedP></Link>
                        <UnderLinedP onClick={this.toggle}>delete</UnderLinedP>
                    </NoteOptions>
                    <div className="NoteView">
                        <H1>{this.state.title}</H1>
                        <p>{this.state.content}</p>
                    </div>
                    {this.state.modal 
                        ? <div id="myModal" className="modal">
                                <div className="modalData">
                                    <div className="modal-content">
                                        <p>Are you sure you want to delete this?</p>
                                    </div>
                                    <div className="modal-options">
                                            <Button onClick={this.onDelete} delete>Delete</Button>
                                            <Button onClick={this.toggle}>No</Button>
                                    </div>
                                </div>
                            </div> 
                        : null
                    }
                </div>
            )
        }
    }
}

export default NoteView