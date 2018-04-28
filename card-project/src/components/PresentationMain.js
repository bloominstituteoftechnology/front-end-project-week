import React from 'react';
import ModalComponent from './ModalComponent';
import { Link } from 'react-router-dom';
import { addNote, deleteNote, addTag, reorderState } from '../actions/actions';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

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
	marginLeft: '3%',
	marginTop: 10,
	display: 'inline-flex'
};
const mainSt = {
	marginLeft: '2%',
	paddingTop: 50
};
const ntSt = {
	display: 'inline-flex',
	width: '100%',
	paddingBottom: 8,
	// borderBottom: '1px solid gray',
	fontWeight: 'bold',
	fontSize: 20
};
const tagSt = {
	cursor: 'context-menu',
	marginLeft: 20,
	paddingLeft: 10,
	paddingRight: 10,
	backgroundColor: 'beige',
	border: '2px solid yellow'
};
const aprompt = {
	width: '400%',
	padding: 100
};
const iStyle = {
	// marginLeft: 60,
	marginTop: 10
};
const noteStyle = {
	// padding: 40,
	// marginLeft: 10,
	// marginRight: 10,
	margin: 10
	// border: '1px solid red',
	// fontSize: 10,
	// textAlign: 'center'
};
const desBtn = {
	marginLeft: '54%',
	color: 'black',
	fontWeight: 'bold',
	// border: '1px solid yellow',

	marginRight: 0
};
const desBtn2 = {
	marginLeft: '3%',
	cursor: 'pointer'
};
const desBtn3 = {
	marginLeft: '4%',
	cursor: 'pointer'
};
let tempVal;
const hide = {
	display: 'none'
};
let dcolor = 'red';
let dcomplete = 'NOT COMPLETE';
let changeOrder = 'Descending';
let originalNotes;
export class PresentationMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			renderB: true,
			modal: false,
			list: this.props.notes,
			tag: '',
			isGoing: true,
			showAscending: true,
			orderTag: false
		};
	}

	componentDidMount() {
		this.props.notes;
	}
	handleInputChange = (e) => {
		let name = e.target.name;
		this.setState({ [e.target.name]: e.target.value });

		console.log(e.target.name);
		console.log(e.target.value);
	};
	handleTag = (tname, index) => {
		this.setState({ tag: tname });
		this.props.addTag({ tag: tname }, index);
	};
	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};
	dynamicSort = (property) => {
		var sortOrder = 1;
		if (property[0] === '-') {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function(a, b) {
			var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
			return result * sortOrder;
		};
	};
	handleOrder = () => {
		let norder;
		if (this.state.showAscending === true) {
			norder = this.state.list.slice(0).reverse().map((note, i) => {
				return note;
			});
			this.setState({
				showAscending: !this.state.showAscending
			});
			this.setState({
				list: norder
			});
			this.props.reorderState(norder);
			this.setState({
				list: norder
			});
		} else {
			norder = this.state.list.slice(0).reverse().map((note, i) => {
				return note;
			});
			this.setState({
				showAscending: !this.state.showAscending
			});
			this.props.reorderState(norder);
			this.setState({
				list: norder
			});
		}

		console.log('norder: ', norder);
	};
	handleTag = () => {
		if (originalNotes === undefined) {
			originalNotes = this.state.list.map((note) => {
				return note;
			});	
		} 
		if (this.state.orderTag === false) {
			this.setState({
				orderTag: !this.state.orderTag
			});
			console.log('original notes value: ', originalNotes)
		
			

			let tagArr = this.state.list.sort(this.dynamicSort('tag'));
			console.log('New ARrray is: ', tagArr);
			this.setState({
				list: tagArr
			});
			this.props.reorderState(tagArr);
		} else {
			this.setState({
				orderTag: !this.state.orderTag
			});
			this.setState({
				list: originalNotes
			});
			this.props.reorderState(originalNotes);
		}
	};
	render() {
		let tempVal;
		console.log('notes length: ', this.props.notes.length);
		console.log('list is: ', this.state.list);
		let descI = this.props.notes.length;
		return (
			<div style={mainSt}>
				<div style={hide}>
					{this.state.showAscending === true ? (changeOrder = 'DESCENDING') : (changeOrder = 'ASCENDING')}
				</div>
				<div>
					<h4 style={hSt}>Your Notes:</h4>
					<span>
						<h5 style={desBtn}>
							Change Order
							<button style={desBtn2} onClick={this.handleOrder}>
								{changeOrder}
							</button>
						</h5>
					</span>
					<span>
						<h5 style={desBtn}>
							Order by Tag
							<button style={desBtn3} onClick={this.handleTag}>
								Enable/Disable
							</button>
						</h5>
					</span>
				</div>

				{this.state.showAscending ? (
					<div>
						{this.props.notes.map((note, i) => {
							tempVal = i;
							{
								note.check === false ? (dcolor = 'red') : (dcolor = 'blue');
							}
							{
								note.check === false ? (dcomplete = 'NOT COMPLETE') : (dcomplete = 'COMPLETED');
							}
							return (
								<Link to={`/notes/view/${i}`} style={icSt} key={note + i}>
									{' '}
									<h6>
										<span style={ntSt}>
											{' '}
											<span style={{ color: dcolor }}>
												{note.title} {`  `}
											</span>
										</span>
										<ModalComponent index={i} color={dcolor} />
										<div style={noteStyle}>
											<span style={{ color: dcolor }}>{note.note}</span>
										</div>
									</h6>
								</Link>
							);
						})}
					</div>
				) : (
					<div>
						{this.props.notes.map((note, i) => {
							tempVal = i;
							{
								note.check === false ? (dcolor = 'red') : (dcolor = 'blue');
							}
							{
								note.check === false ? (dcomplete = 'NOT COMPLETE') : (dcomplete = 'COMPLETED');
							}
							return (
								<Link to={`/notes/view/${i}`} style={icSt} key={note + i}>
									{' '}
									<h6>
										<span style={ntSt}>
											{' '}
											<span style={{ color: dcolor }}>
												{note.title} {`  `}
											</span>
										</span>
										<ModalComponent index={i} color={dcolor} />
										<div style={noteStyle}>
											<span style={{ color: dcolor }}>{note.note}</span>
										</div>
									</h6>
								</Link>
							);
						})}
					</div>
				)}
			</div>
		);
	}
}
const mapDispatchToProps = (state) => {
	return {
		notes: state.notes
	};
};

export default connect(mapDispatchToProps, { addNote, deleteNote, addTag, reorderState })(PresentationMain);
