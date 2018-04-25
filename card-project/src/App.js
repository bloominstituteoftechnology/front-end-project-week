import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

import PresentationMain from './components/PresentationMain';
import PresentationView from './components/PresentationView';
import EditNote from './components/EditNote';
import CreateNew from './components/CreateNew';
import LambdaSide from './components/LambdaSide';
import { addNote, deleteNote } from './actions/actions';

const notes = [
	{
		title: 'Note_1',
		note:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ante, tincidunt a ex ac, dictum condimentum enim. Nunc hendrerit et nunc at interdum. Nulla fermentum augue eu nunc finibus laoreet. Aenean blandit at augue in tincidunt. Quisque urna tortor, congue vel tincidunt vitae, varius a libero. Aenean rhoncus porta elit, id maximus dui egestas quis. Mauris volutpat eros vel dignissim tempor. Vestibulum efficitur metus id orci sollicitudin auctor. Ut eu nisi in orci maximus bibendum. Praesent ultricies, quam eget tempus vulputate, eros ex bibendum sem, sit amet malesuada sem libero eu justo. In eu interdum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla laoreet nisi vitae bibendum aliquet. Suspendisse ut eros feugiat, varius nibh vitae, mollis lorem. Suspendisse porttitor dui aliquam dolor ornare molestie.'
	},
	{
		title: 'Note_2',
		note:
			'Praesent sed ullamcorper velit. Vestibulum volutpat leo eleifend ante volutpat, et posuere metus pellentesque. Sed molestie posuere tincidunt. Etiam egestas, risus et ultrices posuere, tortor sapien laoreet nibh, vel viverra mauris tellus sit amet libero. Donec sodales sem vehicula, ultrices mauris in, iaculis arcu. In non lacinia purus. Morbi gravida justo at leo bibendum tristique. Nullam aliquam felis eget ultricies fermentum. Phasellus imperdiet mauris sit amet ipsum pharetra, sed fringilla nibh pellentesque. Fusce finibus vulputate dui eget tincidunt. Aliquam molestie massa in varius porttitor. Praesent maximus pharetra vehicula.'
	},
	{
		title: 'Note_3',
		note:
			'Nulla eu auctor dui. Integer convallis purus id risus condimentum venenatis. Quisque blandit elit justo, ac semper enim bibendum rutrum. Nulla at purus vitae justo semper vulputate non in mauris. Mauris feugiat pretium leo id cursus. Cras sit amet tristique libero, ut ultricies velit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sagittis leo non dolor vulputate pellentesque.'
	},
	{
		title: 'Note_4',
		note:
			'Nunc finibus ornare vehicula. Nunc eu leo maximus, tincidunt tortor non, sagittis neque. Sed nec ex lacus. Duis elementum sem at dolor iaculis, sit amet congue quam vulputate. Sed non nisi eget erat fermentum tempor. Curabitur ac suscipit nunc. Duis mattis ex tellus, at vestibulum dui porta sed. Integer eu turpis odio. Pellentesque vitae feugiat ipsum.'
	},
	{
		title: 'Note_5',
		note:
			'Sed rutrum sagittis sem, vitae aliquet velit vulputate et. In mollis suscipit odio sed blandit. Donec sed tellus quis metus congue iaculis. Morbi convallis nisi sed mi interdum, ut pretium sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vulputate dolor vitae arcu tristique laoreet. Vestibulum at facilisis turpis. Quisque condimentum gravida massa, ut aliquet enim. Aliquam iaculis justo felis. Nulla facilisi. Ut a mi rutrum lorem porta condimentum eget ac diam. Nulla fermentum cursus consequat. Quisque venenatis sodales libero sit amet dignissim.'
	},
	{
		title: 'Note_6',
		note:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet odio at sem sollicitudin fringilla. Vestibulum lacinia ante at nisl dapibus, ut ornare neque sodales. Suspendisse ut leo sed mi condimentum euismod eu nec metus. Morbi ut nibh nulla. Phasellus quis massa mi. Aliquam id libero ac arcu hendrerit fringilla non nec tortor. Vestibulum laoreet felis eu metus tempus, vitae hendrerit nisl pulvinar.'
	},
	{
		title: 'Note_7',
		note:
			'Praesent finibus justo diam, id elementum nulla faucibus a. Suspendisse non dolor eu ipsum lobortis pretium. Duis vel metus vel urna vulputate luctus. Aenean fringilla, purus nec laoreet vestibulum, massa magna ultrices augue, in mollis ex purus quis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fringilla risus neque, sit amet rhoncus orci commodo non. Praesent luctus aliquam diam et tincidunt. Morbi vehicula rutrum lacus.'
	},
	{
		title: 'Note_8',
		note:
			'Pellentesque id velit elementum, accumsan ligula non, mattis lacus. Phasellus dui leo, porttitor id pharetra et, convallis vel lacus. Mauris lobortis eros turpis. Etiam in tortor tellus. Proin dui ligula, facilisis sit amet mollis vel, accumsan vel nisl. Fusce rutrum ut felis vestibulum porta. Integer dictum arcu ut faucibus pretium. Integer pharetra leo at massa vestibulum luctus. Donec faucibus feugiat felis, quis faucibus turpis dictum vulputate.'
	},
	{
		title: 'Note_9',
		note:
			'Sed bibendum placerat faucibus. Pellentesque non magna lobortis, ullamcorper diam ut, euismod felis. Aliquam eget feugiat ipsum, quis convallis dui. Donec viverra quis ligula ut ultricies. Suspendisse potenti. Sed et nisi tempus, sagittis eros ut, finibus urna. Donec a justo magna. Mauris lacus tellus, ultrices ut ullamcorper vitae, iaculis non eros. Ut fringilla libero dui, id luctus odio viverra sed. Vivamus interdum, tellus vel malesuada efficitur, neque massa ornare quam, at condimentum justo risus a augue. Integer molestie purus vitae sollicitudin euismod. Etiam auctor neque ut orci gravida, ac cursus leo efficitur.'
	}
];

function LeftContent() {
	return (
		<div className="LeftContent">
			<LambdaSide />
		</div>
	);
}

function RightContent(props) {
	console.log('RIGHTcontent props', props);
	console.log(props);
	// console.log(this.props.notes.map((val,i) => val))
	return (
		<div className="RightContent">
			<PresentationMain />
		</div>
	);
}

function SplitPane(props) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">{props.left}</div>
			<div className="SplitPane-right">{props.right}</div>
		</div>
	);
}
const Home = (props) => {
	console.log('HOME PROPS: ', props);
	console.log(props);
	return <SplitPane left={<LeftContent />} right={<RightContent notes={props.notes} />} />;
};
const New = (props) => {
	return <SplitPane left={<LambdaNewL />} right={<LambdaNewR />} />;
};
const View = (props) => {
	{
		console.log('Inside app.js, inside View method, ID: ', props.match.params.id);
	}
	let id = props.match.params.id;

	return (
		<div style={{ height: '100%' }}>
			<SplitPane left={<LambdaNewL />} right={<ViewRight id={id} />} />
		</div>
	);
};
export const Edit = (props) => {
	let idE = props.match.params.idE;
	console.log(props);
	return (
		<div style={{ height: '100%' }}>
			<SplitPane left={<LambdaNewL />} right={<EditRight idE={idE} />} />
		</div>
	);
};
const Delete = (props) => {
	let id = props.match.params.id;

	return (
		<div style={{ height: '100%' }}>
			<SplitPane left={<LambdaNewL />} right={<ViewRight id={id} />} />
		</div>
	);
};

const ViewRight = (props) => {
	return (
		<div className="RightContent">
			<PresentationView id={props.id} />
		</div>
	);
};
const EditRight = (props) => {
	return (
		<div className="RightContent">
			<EditNote idE={props.idE} />
		</div>
	);
};

const LambdaNewL = (props) => {
	return (
		<div className="LeftContent">
			<LambdaSide />
		</div>
	);
};
const LambdaNewR = (props) => {
	return (
		<div className="RightContent">
			<CreateNew />
		</div>
	);
};
const mapDispatchToProps = (state) => {
	return {
		notes: state.notes
	};
};
// const App = (props) => {
// 	return (
// 		<div style={{ height: '100%' }}>
// 			<Route exact path="/" component={Home} />
// 			<Route path="/notes/new" component={New} />
// 			<Route path="/notes/view/:id" component={View} />
// 			<Route path="/notes/edit/:idE" component={Edit} />
// 			<Route path="/notes/view/delete/:idE" component={Delete} />
// 		</div>
// 	);
// };
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{ height: '100%' }}>
				{/* <Route exact path="/" component={Home} /> */}
				<Route exact path="/" component={(props) => <Home timestamp={new Date().toString()} {...props} />} />
				{/* <Home notes={this.props.notes} /> */}
				<Route path="/notes/new" component={New} />
				<Route path="/notes/view/:id" component={View} />
				<Route path="/notes/edit/:idE" component={Edit} />
				<Route path="/notes/view/delete/:idE" component={Delete} />
			</div>
		);
	}
}
// connect(mapDispatchToProps, { addNote, deleteNote})(PresentationMain);
export default App;
