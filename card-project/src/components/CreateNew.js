import React from 'react';
import LambdaSide from './LambdaSide';

const textarea = {
    width: '90%',
    height: 300,
    padding: '12px 20px',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f8f8f8',
    resize: 'none',
    marginTop: 20,
}
const bStyle = {
    marginTop: 20,
    width: '28.33%',
    backgroundColor: '#25b8bd',
    cursor: 'pointer',
    color: 'white',
    height: 50,
    fontWeight: 'bold',
    fontSize: 20,

}
const mainSt = {
    marginLeft: '5%',
    paddingTop: 55
}
const tStyle = {
    width: '47%',
    height: 40,
    marginTop: 10
}
const hSt = {
    fontWeight: 'bold',

}
class CreateNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			note: ''
		};
    }
    handleTextInput = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        
    };
    newNote = (e) => {
        e.preventDefault();
        // this.setState({title: this.state.title, note: this.state.note})
        console.log('title: ', this.state.title);
        console.log('note: ', this.state.note);
    }
	render() {
		return (
			<div style={mainSt} >
               {/* { console.log(this.state.note)} */}
                <h3 style={hSt} >Create New Note:</h3>
				<input style={tStyle} type="text" name="title" value={this.state.title} placeholder="Note Title" onChange={this.handleTextInput} />
				<input style={textarea} type="text" name="note"  value={this.state.note}  placeholder="Note Content" onChange={this.handleTextInput} />
                <button onClick={this.newNote} style={bStyle} >Save</button>
			</div>
		);
	}
}
export default CreateNew;