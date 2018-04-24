import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import PresentationMain from './components/PresentationMain';
import PresentationView from './components/PresentationView';
import EditNote from './components/EditNote';
import CreateNew from './components/CreateNew';
import LambdaSide from './components/LambdaSide';

const notes = [
	{
		Note_1:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ante, tincidunt a ex ac, dictum condimentum enim. Nunc hendrerit et nunc at interdum. Nulla fermentum augue eu nunc finibus laoreet. Aenean blandit at augue in tincidunt. Quisque urna tortor, congue vel tincidunt vitae, varius a libero. Aenean rhoncus porta elit, id maximus dui egestas quis. Mauris volutpat eros vel dignissim tempor. Vestibulum efficitur metus id orci sollicitudin auctor. Ut eu nisi in orci maximus bibendum. Praesent ultricies, quam eget tempus vulputate, eros ex bibendum sem, sit amet malesuada sem libero eu justo. In eu interdum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla laoreet nisi vitae bibendum aliquet. Suspendisse ut eros feugiat, varius nibh vitae, mollis lorem. Suspendisse porttitor dui aliquam dolor ornare molestie.'
	},
	{
		Note_2:
			'Praesent sed ullamcorper velit. Vestibulum volutpat leo eleifend ante volutpat, et posuere metus pellentesque. Sed molestie posuere tincidunt. Etiam egestas, risus et ultrices posuere, tortor sapien laoreet nibh, vel viverra mauris tellus sit amet libero. Donec sodales sem vehicula, ultrices mauris in, iaculis arcu. In non lacinia purus. Morbi gravida justo at leo bibendum tristique. Nullam aliquam felis eget ultricies fermentum. Phasellus imperdiet mauris sit amet ipsum pharetra, sed fringilla nibh pellentesque. Fusce finibus vulputate dui eget tincidunt. Aliquam molestie massa in varius porttitor. Praesent maximus pharetra vehicula.'
	},
	{
		Note_3:
			'Nulla eu auctor dui. Integer convallis purus id risus condimentum venenatis. Quisque blandit elit justo, ac semper enim bibendum rutrum. Nulla at purus vitae justo semper vulputate non in mauris. Mauris feugiat pretium leo id cursus. Cras sit amet tristique libero, ut ultricies velit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sagittis leo non dolor vulputate pellentesque.'
	},
	{
		Note_4:
			'Nunc finibus ornare vehicula. Nunc eu leo maximus, tincidunt tortor non, sagittis neque. Sed nec ex lacus. Duis elementum sem at dolor iaculis, sit amet congue quam vulputate. Sed non nisi eget erat fermentum tempor. Curabitur ac suscipit nunc. Duis mattis ex tellus, at vestibulum dui porta sed. Integer eu turpis odio. Pellentesque vitae feugiat ipsum.'
	},
	{
		Note_5:
			'Sed rutrum sagittis sem, vitae aliquet velit vulputate et. In mollis suscipit odio sed blandit. Donec sed tellus quis metus congue iaculis. Morbi convallis nisi sed mi interdum, ut pretium sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vulputate dolor vitae arcu tristique laoreet. Vestibulum at facilisis turpis. Quisque condimentum gravida massa, ut aliquet enim. Aliquam iaculis justo felis. Nulla facilisi. Ut a mi rutrum lorem porta condimentum eget ac diam. Nulla fermentum cursus consequat. Quisque venenatis sodales libero sit amet dignissim.'
	},
	{
		Note_6:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet odio at sem sollicitudin fringilla. Vestibulum lacinia ante at nisl dapibus, ut ornare neque sodales. Suspendisse ut leo sed mi condimentum euismod eu nec metus. Morbi ut nibh nulla. Phasellus quis massa mi. Aliquam id libero ac arcu hendrerit fringilla non nec tortor. Vestibulum laoreet felis eu metus tempus, vitae hendrerit nisl pulvinar.'
	},
	{
		Note_7:
			'Praesent finibus justo diam, id elementum nulla faucibus a. Suspendisse non dolor eu ipsum lobortis pretium. Duis vel metus vel urna vulputate luctus. Aenean fringilla, purus nec laoreet vestibulum, massa magna ultrices augue, in mollis ex purus quis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fringilla risus neque, sit amet rhoncus orci commodo non. Praesent luctus aliquam diam et tincidunt. Morbi vehicula rutrum lacus.'
	},
	{
		Note_8:
			'Pellentesque id velit elementum, accumsan ligula non, mattis lacus. Phasellus dui leo, porttitor id pharetra et, convallis vel lacus. Mauris lobortis eros turpis. Etiam in tortor tellus. Proin dui ligula, facilisis sit amet mollis vel, accumsan vel nisl. Fusce rutrum ut felis vestibulum porta. Integer dictum arcu ut faucibus pretium. Integer pharetra leo at massa vestibulum luctus. Donec faucibus feugiat felis, quis faucibus turpis dictum vulputate.'
	},
	{
		Note_9:
			'Sed bibendum placerat faucibus. Pellentesque non magna lobortis, ullamcorper diam ut, euismod felis. Aliquam eget feugiat ipsum, quis convallis dui. Donec viverra quis ligula ut ultricies. Suspendisse potenti. Sed et nisi tempus, sagittis eros ut, finibus urna. Donec a justo magna. Mauris lacus tellus, ultrices ut ullamcorper vitae, iaculis non eros. Ut fringilla libero dui, id luctus odio viverra sed. Vivamus interdum, tellus vel malesuada efficitur, neque massa ornare quam, at condimentum justo risus a augue. Integer molestie purus vitae sollicitudin euismod. Etiam auctor neque ut orci gravida, ac cursus leo efficitur.'
	}
];
const mainStyle = {
	// display:'inline',
	// maxWidth: 1024,
	// width: '100%'
};

function LeftContent() {
	return (
		<div className="LeftContent">
			{/* <div /> */}
			<LambdaSide />
		</div>
	);
}

function RightContent() {
	return (
		<div className="RightContent">
			<PresentationMain />
			{/* <div /> */}
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
	return <SplitPane left={<LeftContent />} right={<RightContent />} />;
};
const New = (props) => {
	return <SplitPane left={<LambdaNewL />} right={<LambdaNewR />} />;
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
// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<div>
// 			<SplitPane left={<LeftContent />} right={<RightContent />} />;
// 			</div>
// 		);
// 	}
// }

const App = (props) => {
	return (
		<div style={{ height: '100%' }}>
			{/* <SplitPane left={<LeftContent />} right={<RightContent />} /> */}
			{/* <Home /> */}
			<Route exact path="/" component={Home} />
			<Route path="/notes/new" component={New} />
			{/* <Route path="/movies/:id" component={Movie} /> */}
		</div>
	);
};
{
	/* <Link style={lsty} to='/'>apple</Link>
            <Link style={lsty} to='/iPad'>iPad</Link> */
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

export default App;
