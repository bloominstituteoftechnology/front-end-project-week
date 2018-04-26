import React from 'react';
import { Link } from 'react-router-dom';
import { addNote, deleteNote } from '../actions/actions';
import { connect } from 'react-redux';


// const cStyle = {
// 	marginLeft: '10%',
// 	border: '2px solid red',
// 	display: 'flex'
// };

// const lStyle = {
// 	width: '20%',
// 	marginLeft: '1%',
// 	marginRight: '1%',
// 	display: 'inline-block',
// 	height: 1000,
// 	border: '2px solid red'
// };
const icSt = {
	display: 'inline-flex',
	backgroundColor: 'white',
	width: '22%',
	marginLeft: '3%',
	marginRight: '3%',
	border: '1px solid gray',
	padding: 10,
	height: 200,
	cursor: 'pointer',
	marginTop: 10,
	marginBottom: 10,
	overflow: 'hidden'
};
const hSt = {
	fontWeight: 'bold',
	marginLeft: '3%'
};
const mainSt = {
	marginLeft: '5%',
	paddingTop: 50
};
const ntSt = {
	display: 'flex',
	width: '100%',
	paddingBottom: 8,
	borderBottom: '1px solid gray',
	fontWeight: 'bold',
	fontSize: 20
};
const mapDispatchToProps = (state) => {
	return {
		notes: state.notes
	};
};


export class PresentationMain extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			renderB: true,
			list: this.props.notes
		}
	}

	componentDidMount() {
		this.props.notes
	}

	render() {
		return (
			<div style={mainSt}>
				<h4 style={hSt}>Your Notes:</h4>				
				{this.props.notes.map((note, i) => {
					return (					
						<Link to={`/notes/view/${i}`} style={icSt} key={note + i}>
							{' '}
							<h6>
								<span style={ntSt}>{note.title}</span>
								<br />
								{note.note}
							</h6>
						</Link>
					);
				})}
				
			</div>
		);
	}
}

export default connect(mapDispatchToProps, { addNote, deleteNote })(PresentationMain);
