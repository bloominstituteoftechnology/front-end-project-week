import styled, { keyframes } from 'styled-components';
import { zoomIn, slideInLeft } from 'react-animations';

const zoomAnimation = keyframes`${zoomIn}`;

// --------------- end of animations

export const BGColor = styled.div`
  background-color: #ebebeb;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const SubmitContainer = styled.div`
	padding-left: 170px;
	> h3 {
		margin-bottom: 15px;
		padding-top: 40px;
		padding-bottom: 7px;
		font-size: 1.3rem;
		font-weight: bold;
	}
	> form {
		display: flex
		flex-direction:column
		width: 60%;
		margin-bottom: 15px;
`;


export const InputTitle = styled.input`
	width: 200px;
	margin-bottom: 10px;
	padding: 1%;
`;

export const InputContent = styled.textarea`
	width: 450px;
	padding: 1%;
	height: 200px;
	white-space:pre;
`;

export const DivClick = styled.button`
	text-align: center;
	padding: 1%;
	border: solid #005778 .5px;
	background-color: #4aacac;
	color: white;
	width: 120px;
	&:hover {
		background-color: #2c6666;
		cursor: pointer;
	}
`;

export const Flexdiv = styled.div`
	display: flex;
	align-items: center;
	> div {
		margin-left: 12%;
	}
`;

// ------------------------- end of CreateNote

export const LinkedContainer = styled.div`
	padding: 40px 2% 0 170px;
  > div > h2 {
  	font-size: 1.3rem;
    font-weight: bold;
    color: #4b4b4b;
    margin-bottom: 22px;
  }
  > div > p {
  	font-size: 1.1rem;
  }
`;

export const NoteLinks = styled.div`
	display: flex;
	position: absolute;
	top: 15px;
	right: 5%;
	> p {
		margin-right: 10px;
	}
`;

export const SubmitContainerL = styled.div`
	> h3 {
		margin-bottom: 15px;
		padding-bottom: 7px;
		font-size: 1.3rem;
		font-weight: bold;
	}
	> form {
		display: flex
		flex-direction:column
		width: 60%;
		margin-bottom: 15px;
`;

export const InputTitleL = styled.input`
	width: 200px;
	margin-bottom: 10px;
	padding: 1%;
`;

export const InputContentL = styled.textarea`
	width: 450px;
	padding: 1%;
	height: 200px;
`;

export const DivClickL = styled.button`
	text-align: center;
	padding: 1%;
	border: solid #005778 .5px;
	background-color: #4aacac;
	color: white;
	width: 120px;
	&:hover {
		background-color: #2c6666;
		cursor: pointer;
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 16%;
  left: 32%;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(129, 130, 131, 0.6);
  border: solid black 1px;
`;

// export const DeleteDive = styled.div`
// 	position: relative;
// 	top: 18%;
// 	left: 27%;
// 	border: solid black 1px;
// 	width: 300px;
// 	text-align: center;
// 	padding: 5%;
// 	background-color: white;
// 	opacity: 1;
// 	z-index: 2;
// 	animation: 1s ${zoomAnimation};
// `;

export const DeleteBTN = styled.button`
  margin-top: 15px;
  padding: 3%;
  width: 120px;
  background-color: red;
  color: white;
  border: solid black .5px;
  &:hover {
  	background-color: #b60707;
  	cursor: pointer;
  }
`;

export const NoBTN = styled.button`
	margin-top: 15px;
	padding: 3%;
  width: 120px;
  background-color: #4aacac;
  border: solid #005778 .5px;
  color: white;
  &:hover {
		background-color: #2c6666;
		cursor: pointer;
	}
`;

export const ButtonFlex = styled.div`
	display: flex;
  justify-content: space-evenly;
`;

export const Author = styled.p`
	margin-top: 15px;
	text-transform:capitalize;
`;

// ------------------------- end of LinkedNote

export const NoteTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: bold;
	overflow-wrap: break-word;
`;

export const NoteHR = styled.hr`
	border: none;
	height: 2px;
	color: #818181;
	background-color: #818181;
`;

export const NoteContainer = styled.div`
	border: solid black 1px;
	width: 26%;
	margin-right: 2%;
	margin-bottom: 10px;
	padding: 2%;
	background-color: white;
`;

export const WrapP = styled.p`
	overflow-wrap: break-word;
`;

export const AuthorL = styled.p`
	margin-top: 10px;
	text-transform:capitalize;
`;

// ------------------------- end of Note

export const NotesContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 14px;
	flex-wrap: wrap;
`;

export const MainContainer = styled.div`
	padding: 47px 22px 47px 170px
	> h2 {
		font-size: 1.3rem;
		font-weight: bold;
		color: #4b4b4b;
		margin-left: 1.5%;
	}
`;

export const SearchInput = styled.input`
  text-align: center;
  padding: .2%;
  font-size: 1.2rem;
  color: grey;
  margin-left: 31%;
  width: 200px;
`;

// ------------------------- end of NoteList
