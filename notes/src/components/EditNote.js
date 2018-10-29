import React from 'react';
import axios from 'axios';

// const EditNote = props => {
//     return(
//         <div className="edit-note">
//             <p>edit</p>
//             <p>delete</p>
//             <div className="edit-note-section">
//                 <h2>Note Name</h2>
//                 <p>Note innerds</p>
//             </div>
//         </div>
//     );
// }
class EditNote extends React.Component{
    constructor(){
        super();
        this.state = {
            note : {},
        }
    }

    componentDidMount(){
        const ID = this.props.match.params;
        console.log(ID)
        // this.fetchNoteById(id);
    }

    fetchNoteById = id => {
        axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                console.log("this is the response" , response)
                this.setState({note : response.data})
            })
            .catch(error => alert(error))
    }

    render(){
        return(
            <form>
                <input type="text" value={this.state.note.title} />
                <input type="text" />
            </form>
        );
    }
}

export default EditNote;