import React from 'react';
import { addNote} from '../actions/actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            note: '',
            tag: ''
		};
    }
    refresh = () => {
		this.props.notes;
	}
    componentDidMount() {
		this.refresh();
    }
    
    handleTextInput = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        
    };
    newNote = (e) => {
        // e.preventDefault();
        // this.props.addNote(this.state.note);
        // this.props.addTitle(this.state.title);
        const noteObject = { title: this.state.title, note: this.state.note, check: false, tag: this.state.tag };
        this.props.addNote(noteObject);
        this.refresh();
        this.setState({
            title: '',
            note: ''
        })
        // alert('New note and title coming soon, as MVP is approved... title: ' + this.state.title + "   note: " + this.state.note)
    }
	render() {
		return (
			<div style={mainSt} >
                <h3 style={hSt} >Create New Note:</h3>
				<input style={tStyle} type="text" name="title" value={this.state.title} placeholder="Note Title" onChange={this.handleTextInput} />
				<input style={textarea} type="text" name="note"  value={this.state.note}  placeholder="Note Content" onChange={this.handleTextInput} />
                {/* <button onClick={this.newNote} style={bStyle} ><Link to={`/`}>Save</Link></button> */}
                <Link to={`/`} onClick={this.newNote} ><button style={bStyle} >Save</button></Link>

			</div>
		);
	}
}
const mapDispatchToProps = (state) => {
	return {
        notes: state.notes,
        // titles: state.titles,
	};
};
// export default CreateNew;
export default connect(mapDispatchToProps, { addNote})(CreateNew);