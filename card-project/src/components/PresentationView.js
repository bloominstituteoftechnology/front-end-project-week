import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LambdaSide from './LambdaSide';
import EditNote from './EditNote';

const notes = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ante, tincidunt a ex ac, dictum condimentum enim. Nunc hendrerit et nunc at interdum. Nulla fermentum augue eu nunc finibus laoreet. Aenean blandit at augue in tincidunt. Quisque urna tortor, congue vel tincidunt vitae, varius a libero. Aenean rhoncus porta elit, id maximus dui egestas quis. Mauris volutpat eros vel dignissim tempor. Vestibulum efficitur metus id orci sollicitudin auctor. Ut eu nisi in orci maximus bibendum. Praesent ultricies, quam eget tempus vulputate, eros ex bibendum sem, sit amet malesuada sem libero eu justo. In eu interdum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla laoreet nisi vitae bibendum aliquet. Suspendisse ut eros feugiat, varius nibh vitae, mollis lorem. Suspendisse porttitor dui aliquam dolor ornare molestie.',
	'Praesent sed ullamcorper velit. Vestibulum volutpat leo eleifend ante volutpat, et posuere metus pellentesque. Sed molestie posuere tincidunt. Etiam egestas, risus et ultrices posuere, tortor sapien laoreet nibh, vel viverra mauris tellus sit amet libero. Donec sodales sem vehicula, ultrices mauris in, iaculis arcu. In non lacinia purus. Morbi gravida justo at leo bibendum tristique. Nullam aliquam felis eget ultricies fermentum. Phasellus imperdiet mauris sit amet ipsum pharetra, sed fringilla nibh pellentesque. Fusce finibus vulputate dui eget tincidunt. Aliquam molestie massa in varius porttitor. Praesent maximus pharetra vehicula.',
	'Nulla eu auctor dui. Integer convallis purus id risus condimentum venenatis. Quisque blandit elit justo, ac semper enim bibendum rutrum. Nulla at purus vitae justo semper vulputate non in mauris. Mauris feugiat pretium leo id cursus. Cras sit amet tristique libero, ut ultricies velit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sagittis leo non dolor vulputate pellentesque.',
	'Nunc finibus ornare vehicula. Nunc eu leo maximus, tincidunt tortor non, sagittis neque. Sed nec ex lacus. Duis elementum sem at dolor iaculis, sit amet congue quam vulputate. Sed non nisi eget erat fermentum tempor. Curabitur ac suscipit nunc. Duis mattis ex tellus, at vestibulum dui porta sed. Integer eu turpis odio. Pellentesque vitae feugiat ipsum.',
	'Sed rutrum sagittis sem, vitae aliquet velit vulputate et. In mollis suscipit odio sed blandit. Donec sed tellus quis metus congue iaculis. Morbi convallis nisi sed mi interdum, ut pretium sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vulputate dolor vitae arcu tristique laoreet. Vestibulum at facilisis turpis. Quisque condimentum gravida massa, ut aliquet enim. Aliquam iaculis justo felis. Nulla facilisi. Ut a mi rutrum lorem porta condimentum eget ac diam. Nulla fermentum cursus consequat. Quisque venenatis sodales libero sit amet dignissim.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet odio at sem sollicitudin fringilla. Vestibulum lacinia ante at nisl dapibus, ut ornare neque sodales. Suspendisse ut leo sed mi condimentum euismod eu nec metus. Morbi ut nibh nulla. Phasellus quis massa mi. Aliquam id libero ac arcu hendrerit fringilla non nec tortor. Vestibulum laoreet felis eu metus tempus, vitae hendrerit nisl pulvinar.',
	'Praesent finibus justo diam, id elementum nulla faucibus a. Suspendisse non dolor eu ipsum lobortis pretium. Duis vel metus vel urna vulputate luctus. Aenean fringilla, purus nec laoreet vestibulum, massa magna ultrices augue, in mollis ex purus quis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fringilla risus neque, sit amet rhoncus orci commodo non. Praesent luctus aliquam diam et tincidunt. Morbi vehicula rutrum lacus.',
	'Pellentesque id velit elementum, accumsan ligula non, mattis lacus. Phasellus dui leo, porttitor id pharetra et, convallis vel lacus. Mauris lobortis eros turpis. Etiam in tortor tellus. Proin dui ligula, facilisis sit amet mollis vel, accumsan vel nisl. Fusce rutrum ut felis vestibulum porta. Integer dictum arcu ut faucibus pretium. Integer pharetra leo at massa vestibulum luctus. Donec faucibus feugiat felis, quis faucibus turpis dictum vulputate.',
	'Sed bibendum placerat faucibus. Pellentesque non magna lobortis, ullamcorper diam ut, euismod felis. Aliquam eget feugiat ipsum, quis convallis dui. Donec viverra quis ligula ut ultricies. Suspendisse potenti. Sed et nisi tempus, sagittis eros ut, finibus urna. Donec a justo magna. Mauris lacus tellus, ultrices ut ullamcorper vitae, iaculis non eros. Ut fringilla libero dui, id luctus odio viverra sed. Vivamus interdum, tellus vel malesuada efficitur, neque massa ornare quam, at condimentum justo risus a augue. Integer molestie purus vitae sollicitudin euismod. Etiam auctor neque ut orci gravida, ac cursus leo efficitur.'
];
const vst = {
	padding: 40
};

// class ModalExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }
const bStylec = {
    marginTop: 20,
    width: '40%',
    backgroundColor: '#25b8bd',
    cursor: 'pointer',
    color: 'white',
    height: 50,
    fontWeight: 'bold',
	fontSize: 20,
	marginLeft: '8%',
	marginRight: '10%'

}
const bStyled = {
    marginTop: 20,
    width: '40%',
    backgroundColor: 'red',
    cursor: 'pointer',
    color: 'white',
    height: 50,
    fontWeight: 'bold',
	fontSize: 20,
	marginLeft: '10%',
}
const warning = {
	textAlign: 'center'
}
const noteSt = {
	padding: 30
}
const linkSte = {
	justifyContent: 'center',
	marginLeft: '87%',
	// display: 'inline-flex',
	textAlign: 'center'
}
const linkStd = {
	justifyContent: 'center',
	marginLeft: '5%',
	// display: 'inline-flex',
	textAlign: 'center'
}
const header = (props) => {
	return (
		<div>
			<Link to={`/notes/edit/${props.id}`}>Edit</Link>
			{/* <Link to='#' onSumbit={alert("hey")} >Delete </Link> */}
			{/* <Link to={`/notes/view/delete/${props.id}`} >Delete</Link> */}
			<a href="#" onClick={this.toggle}>
				Delete{' '}
			</a>
			<hr />
			<h1>Note Name</h1>
			{/* <Route exact path="/notes/view/edit/:idE" component={Edit} /> */}
		</div>
	);
};
class PresentationView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	handleDelete = (e) => {
		e.preventDefault();
		alert('Delete functionality coming soon, after MVP');
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<div>
				<div>
					{console.log('PROPS, TESTING: ', this.props)}
					<Link to={`/notes/edit/${this.props.id}`} style={linkSte}>Edit</Link>
					{/* <Link to='#' onSumbit={alert("hey")} >Delete </Link> */}
					{/* <Link to={`/notes/view/delete/${props.id}`} >Delete</Link> */}
					<a href="#" onClick={this.toggle} style={linkStd} >
						Delete
					</a>
				
					
					<h3 style={noteSt} >
					<h1>Note Name</h1>
						{/* <h1>{header(this.props)}</h1> <br /> */}
						{notes[this.props.id]}
					</h3>
				</div>

				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					{/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
					<ModalBody style={warning} >Are you sure you want to delete this?</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={ this.handleDelete} style={bStyled}>
							Delete
						</Button>{' '}
						<Button color="secondary" onClick={this.toggle} style={bStylec} >
							No
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
// const PresentationView = (props) => {
// 	return (
// 		<div style={vst}>
// 			{/* <Route path="/notes/edit/:idE" component={Edit} />
// 		<hr /> */}
// 			{/* <Link to={`/notes/view/edit/${props.id}` }>
//                 Edit
//             </Link> */}
// 			<div>
// 				{console.log('PROPS, TESTING: ', props)}
// 				<h3>
// 					<h1>{header(props)}</h1> <br />
// 					{notes[props.id]}
// 				</h3>
// 			</div>
// 		</div>
// 	);
// };
export default PresentationView;

// function SplitPane(props) {
// 	return (
// 		<div className="SplitPane">
// 			{/* <div className="SplitPane-left">{props.left}</div> */}
// 			<div className="SplitPane-right">{props.right}</div>
// 		</div>
// 	);
// }
// const Edit = props => {
// 	let idE = props.match.params.idE;
// 	console.log('url :', props.match.params)

// 	return (
// 		<div style={{ height: '100%' }}>
// 			<SplitPane left={<LambdaNewL />} right={<EditRight idE={idE} />} />
// 			</div>)
// }
// const LambdaNewL = (props) => {
// 	return (
// 		<div className="LeftContent">
// 			<LambdaSide />
// 		</div>
// 	);
// };
// const EditRight = (props) => {
// 	return (
// 		<div className="RightContent">
// 		<EditNote idE={props.idE} />
// 		</div>
// 	)
// }
