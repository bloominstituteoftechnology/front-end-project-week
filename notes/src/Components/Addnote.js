import React, {Component} from 'react';

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
                <div>
                    <form onSubmit={this.props.addNote}>
                        <input
                        onChange={this.props.handleInputChange}
                        placeholder='title'
                        value={this.props.title}
                        name='title'
                        />

                        <input 
                        onChange={this.props.handleInputChange}
                        placeholder='content'
                        value={this.props.content}
                        name='content'
                        />
                        <button type='submit'>Add Note</button>

                    </form>
                    </div>
          )
        }

    }

export default Addnote;