
// import axios from 'axios';
// import './Form.css';
// import React from 'react';


// function Form(props) {
//     const handleClick = ev => {
//       ev.preventDefault();
//       if (props.isEditing) {
//         props.updateNote();
//       } else {
//         props.addNote();
//       }
//       props.history.push('/');
//     };
   
//         return (
//             <div className="container">
//                 <div className="notes-header">
//                     <h3>{props.isEditing ? 'Edit Note:' : 'Create New Note:'}</h3>
//                 </div>
//                 <div>
//                 <form >
//                     <input
//                         className="title"
//                         name="title"
//                         value={props.note.name}
//                         size='80'
//                         onChange={props.changeHandler}
//                         type="text"
//                         placeholder='Note Title'
//                     />
//                     <input
//                         className="content"
//                         name="textBody"
//                         size='80'
//                         value={props.note.textBody}
//                         onChange={props.changeHandler}
//                         type="text"
//                         placeholder='Note Content'
//                     />
//                     <br/>
//                     <button onClick={handleClick} className="button">
//                         {props.isEditing ? 'Update' : 'Save'}</button>
//                 </form>
//                 </div>
//             </div>
//         );}
    




// export default Form;




import React from 'react';
import axios from 'axios';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            textBody: ""
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    createNote = event => {
        this.props.addNote(event, this.state);
        this.setState({ title: "", textBody: "" })
        this.props.history.push("/")
    }


    render() {

        return (
            <div className="container">
                <div className="notes-header">
                    <h3>Create New Note:</h3>
                </div>
                <form onSubmit={this.createNote}>
                    <input
                        className="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder='Note Title'
                    />
                    <input
                        className="content"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder='Note Content'
                    />

                    <button className="button">Save</button>
                </form>
            </div>
        );
    }
}



export default Form;
