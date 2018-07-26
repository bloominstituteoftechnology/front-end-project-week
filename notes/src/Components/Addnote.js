import React, {Component} from 'react';
import './Notes.css';
class Addnote extends Component {
    constructor(props) {
        super(props);
      //  this.state = {
        //    notes: [],
         //   title: '',
         //   content: '',
           // note: {
            //    title: '',
             //   content: ''
           // }
        }
    
      render() {
          return (
                <div className='notes-wrapper'>
                    <div className='note'>
                    <h1> Add a Note </h1>
                    <form onSubmit={this.props.addNote}>
                        <input
                        onChange={this.props.handleInputChange}
                        placeholder='Title'
                        value={this.props.title}
                        name='title'
                        />

                        <input 
                        onChange={this.props.handleInputChange}
                        placeholder='Content'
                        value={this.props.content}
                        name='content'
                        />
                        <button className='addbutton' type='submit'>Add Note</button>

                    </form>
                    </div>
                    </div>
          )
        }

    }

export default Addnote;