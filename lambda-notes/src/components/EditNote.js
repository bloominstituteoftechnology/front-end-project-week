
import React from 'react';


class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {},
            title: '',
            text: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.notes !== this.props.notes) {
          this.setState({
            notes: this.props.notes
          });
        }
      }
   

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    render() {
    return (
        <div className="edit-note">
            <h2>Edit Note:</h2>
            <form  onSubmit={(event) => this.props.editNote(event, this.props.match.params.id, this.state.title, this.state.text)}>
            <input onChange={this.handleInputChange} type="text" name="title" placeholder="Title" value={this.state.title}/>
            <input onChange={this.handleInputChange} type="text" name="text" placeholder="Note"  value={this.state.text}/>
            <button onClick={this.handleSubmit} onMouseUp={() => this.props.history.goBack()} color="info" style={{ marginTop: 15 + 'px' }} /*"block" was here*/>Edit</button>
         </form>
        </div>
        );
    }
 }
 export default EditNote;