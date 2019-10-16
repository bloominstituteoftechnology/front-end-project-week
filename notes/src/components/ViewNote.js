import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeleteNoteModul from './deleteNoteModul';

class ViewNote extends React.Component{
    constructor(){
        super();
        this.state = {
            note : {},
            hidden : 'hidden',
        }
    }

    componentDidMount(){
        const ID = this.props.match.params;
        console.log(ID)
        this.fetchNoteById(ID.id);//why? how lol?
    }

    fetchNoteById = id => {
        axios.get(`https://lambdanotesapi.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState({note : response.data})
                // console.log("NOTE : ", response.data)
            })
            .catch(error => alert(error))
    }

    toggleHidden=()=>{
        if(this.state.hidden === ''){
            this.setState({hidden : 'hidden'})
        }else{
            this.setState({hidden : ''});
        }
    }

    render(){
        return(
            <div className="view-note">
                <DeleteNoteModul
                toggleHidden={this.toggleHidden} 
                hidden={this.state.hidden} 
                ID={this.props.match.params.id}
                refresh={this.props.refresh}
                { ...this.props }
                />

                <Link to={`/edit/${ this.props.match.params.id}`} >Edit</Link>
                <a href='#' onClick={() => this.toggleHidden()}>delete</a>
                <div className="note-section">
                    <h2>{this.state.note.title}</h2>
                    <p>{this.state.note.textBody}</p>
                </div>
                
            </div>
        );
    }
}

export default ViewNote;