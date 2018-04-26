import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import PresentationMain from './components/PresentationMain';
import PresentationView from './components/PresentationView';
import EditNote from './components/EditNote';
import CreateNew from './components/CreateNew';
import LambdaSide from './components/LambdaSide';


function LeftContent() {
	return (
		<div className="LeftContent">
			<LambdaSide />
		</div>
	);
}

function RightContent(props) {

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
	return <SplitPane left={<LeftContent />} right={<RightContent notes={props.notes} />} />;
};
const New = (props) => {
	return <SplitPane left={<LambdaNewL />} right={<LambdaNewR />} />;
};
const View = (props) => {
	let id = props.match.params.id;
	return (
		<div style={{ height: '100%' }}>
			<SplitPane left={<LambdaNewL />} right={<ViewRight id={id} />} />
		</div>
	);
};
export const Edit = (props) => {
	let idE = props.match.params.idE;
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


const App = (props) => {
	return (
		<div style={{ height: '100%' }}>
			<Route exact path="/" component={Home} />
			<Route path="/notes/new" component={New} />
			<Route path="/notes/view/:id" component={View} />
			<Route path="/notes/edit/:idE" component={Edit} />
			<Route path="/notes/view/delete/:idE" component={Delete} />
		</div>
	);
};

export default App;
