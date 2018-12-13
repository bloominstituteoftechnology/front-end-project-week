import React from 'react';
// import Notes from './Notes';
import styled from 'styled-components';
import Axios from 'axios';
import Navbar from '../NavBar/Navbar';

class FullNote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: {
				_id: '',
				title: '',
				textBody: ''
			}
		};
	}

	componentDidMount() {
		Axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
			.then((res) =>
				this.setState({
					note: {
						_id: res.data._id,
						title: res.data.title,
						textBody: res.data.textBody
					}
				})
			)
			.catch((err) => console.log(err));
	}

	deletePost = () => {
		Axios.delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
			.then(() => window.location.reload())
			.catch((err) => console.log(err));
	};

	getID = () => {
		const id = this.props.match.params.id;
		return id;
	};

	render() {
		const id = this.props.match.params.id;
		const { note } = this.state;
		return (
			<div>
				<StyledNoteWrapper>
					<Navbar deletePost={this.deletePost} id={{ id }} />
					<StyledNoteContainer key={note._id}>
						<StyledH1>{note.title}</StyledH1>
						<p>{note.textBody}</p>
					</StyledNoteContainer>
				</StyledNoteWrapper>
			</div>
		);
	}
}

export default FullNote;

export const StyledNoteWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	max-width: 900px;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	margin-left: 298px;
`;

export const StyledNoteContainer = styled.div`
	text-decoration: none;
	color: #000000;
	height: 400px;
	display: flex;
	padding: 15px;
	flex-direction: column;
	background-color: #ffffff;
	text-align: start;
	overflow: hidden;
	width: 400px;
	margin: 10px;
`;

export const StyledH1 = styled.h1`
	margin: 0;
	font-size: 24px;
	border-bottom: 2px solid rgba(80, 80, 80, 0.3);
`;

export const StyledHeader = styled.h1`
	display: block;
	width: 100%;
	font-size: 20px;
	color: rgba(80, 80, 80, 0.7);
	margin: 0;
	padding-left: 10px;
	padding-bottom: 0;
	text-align: start;
`;

export const StyledSpan = styled.span`
	color: rgba(80, 80, 80, 0.7);
	padding: 10px;
`;

export const StyledModal = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 400px;
	z-index: 2;
`;
