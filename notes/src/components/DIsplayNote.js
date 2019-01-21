import React, {Component} from 'react';
import DeleteModal from './DeleteModal';




class DisplayNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            note: props.notes.find(note=>props.match.params.id === note._id),
            show:false
        }
        
        window.onbeforeunload = this.saveNote;
    }

    saveNote = ()=>{
        localStorage.setItem('note', JSON.stringify(this.state.note));
    }

    componentDidMount(){
        if(!this.state.note){
            this.setState({note: JSON.parse(localStorage.getItem('note'))});
        }
    }

    editNote = e => {
        console.log(this.props.match.params.id)
        this.props.history.push(`/edit/${this.props.match.params.id}`);
        
      };

    deleteNote = () => {
        console.log(this.props.match.params.id);
        
        
        this.props.delete(this.props.match.params.id);
        this.props.history.push("/");
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
};

    render(){
        if(!this.state.note){
            return(
                <div>Loading data...</div>
            )
        }
        return(
            <div className='inNote'> 
                <div className='topBar'>   
                    <button onClick={this.editNote}>edit</button>
                    <button onClick={this.showModal}>delete</button>
                </div>
                <div>
                    <h3>{this.state.note.title}</h3>
                    <p>{this.state.note.textBody}</p>
                </div>
                {this.state.show ? (
                    <DeleteModal deleteNote={this.deleteNote} hideModal={this.hideModal} />                    
                ) : null }
                
            </div>
        )
    }
}




export default DisplayNote;