import React from 'react';

//const Create = (props) => {
class Create extends React.Component {
    constructor() {
        super() ;
        this.state = {
            title: '',
            textBody: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    saveNote = (event) => {
        //event.preventDefault();
        const input = {
            tags: [],
            _id: this.props.data.length +1,
            title: this.state.title,
            textBody: this.state.textBody
        }
        //console.log('from save butt',this.state)
        //this.props.addNote(input);
        //alert('save clicked');
  
    }
    render(){
    //console.log('from create',this.props);
        return (
            //<div className="form">
                <form 
                    className="form"
                    onSubmit={this.saveNote}
                >
                    <input 
                        className="form-input-title" 
                        type="text"
                        placeholder="Note Title"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                        name="title"
                    />
                    <input 
                        className="form-input-body"
                        type="text"
                        placeholder="Note Content"
                        onChange={this.handleInputChange}
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <button 
                        className="button-form"
                        type="submit"
                        value={this.state.title}
                    >
                    Save</button>
                </form>
            //</div>
        )
    }
};
export default Create;


