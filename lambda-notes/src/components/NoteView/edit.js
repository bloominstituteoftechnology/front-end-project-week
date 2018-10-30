import React from 'react';
    
class EditNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: this.props.expandedNote.title,
            bodyText: this.props.expandedNote.textBody
        }
    }
     changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value});
    }
     render() {
        return (
            <div className='editNoteForm'>

            <h2> Edit Note: </h2>
                <form>

                    <input 
                        type='text' 
                        onChange={this.changeHandler} name='titleText' 
                        value={this.state.titleText} />
                    <input 
                        type='text' 
                        onChange={this.changeHandler} name='bodyText'
                        value={this.state.bodyText} />
                    <button 
                        onClick={() => this.props.editNote ({title:this.state.titleText, textBody: this.state.bodyText})}> Update 
                    </button>

                </form>        
            </div>
        )
    }
}
 export default EditNoteForm;