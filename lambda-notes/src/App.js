// React
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

// Components
import { 
	ListView, 
	CreateNewView, 
	EditView, 
	NoteView, 
} from './views';

class App extends Component {
	state = {
		notes: [
			{
				noteTitle: '',
				noteContent: '',
			}
		],
		toggleMenu: false,
	};

	componentDidMount() {
		const loremIpsumNotes = [];

		for (let i = 0; i < 9; i++) {
			loremIpsumNotes.push({
				noteTitle: `Note Name ${ i }`,
				noteContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum volutpat cursus. Mauris vitae odio at quam pharetra consectetur. Proin suscipit nibh et mauris dignissim, sit amet elementum nulla facilisis. Cras ac nibh mollis, dignissim neque in, tristique enim. Sed sed purus at justo scelerisque ultrices vel et erat. Suspendisse eu nulla ante. Pellentesque eros tellus, mollis a dapibus quis, ultrices at sem. Aliquam sed laoreet leo, ut fringilla justo. Aenean interdum aliquam quam, at consequat ligula eleifend sit amet. Donec sit amet nisl erat. Nunc condimentum arcu eget lacus ultricies, vulputate cursus erat pulvinar. Pellentesque nec tempus metus. Morbi viverra leo non elit egestas rhoncus. Nulla dignissim mauris id ipsum tincidunt, a faucibus sem lacinia. Mauris interdum aliquet quam, sit amet tincidunt justo dapibus vel.			\n\nPellentesque ac elementum nibh. Nam et congue sem, finibus hendrerit sapien. Maecenas et leo id massa dignissim egestas ac ac quam. Nullam congue dui quis lectus egestas lobortis. In ornare elit at rhoncus mollis. Cras velit risus, sollicitudin a quam nec, accumsan euismod quam. In eget interdum risus, nec lacinia tortor. Proin ut viverra turpis. Nunc nisi neque, aliquam tempor pulvinar non, sollicitudin in lorem. Etiam sagittis mauris sed tortor dictum ultricies.			\n\nProin accumsan ac massa efficitur suscipit. Fusce sagittis, arcu sed fermentum maximus, massa ante posuere mauris, in imperdiet ipsum ligula ac dui. Duis eget malesuada sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus ipsum, bibendum id magna in, dignissim vulputate lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mollis ante augue, consectetur lacinia odio semper non. Aliquam lacus diam, cursus eget urna fringilla, semper tincidunt justo. Suspendisse potenti. Ut sit amet efficitur arcu, nec porttitor purus. Maecenas tincidunt tempus quam, sed mollis nibh iaculis vitae. Quisque sit amet massa ac libero condimentum posuere.			\n\nEtiam in eleifend orci. Vestibulum semper ex id sapien finibus, ac lobortis lectus maximus. Suspendisse potenti. Suspendisse condimentum posuere consectetur. Donec in metus id neque dignissim dictum non ut sem. Vestibulum ut sapien quis nisl consectetur auctor. Praesent orci enim, vestibulum ac neque quis, aliquam semper eros. Quisque vitae hendrerit augue. Aliquam eu massa sollicitudin sem finibus gravida eu commodo nunc. Duis rhoncus metus quis sapien aliquam, eget rhoncus massa ultrices. Quisque sed lectus et lectus elementum cursus. Nulla sit amet hendrerit nisl, in viverra nibh. Suspendisse potenti. Aenean dapibus pellentesque elementum.			\n\nMaecenas semper lacus sed nisi hendrerit eleifend. Vestibulum vitae quam finibus, fermentum dolor nec, bibendum turpis. Pellentesque malesuada, purus sed consequat viverra, eros enim laoreet diam, nec condimentum eros ex eget sapien. Cras nec mi dolor. Aenean id turpis at tortor vestibulum rutrum. Vivamus aliquam convallis aliquet. Aliquam erat volutpat. Aliquam consectetur nunc at metus ultricies, a tristique nibh sagittis. Mauris vel vestibulum nulla, sit amet ultrices ex. Aliquam convallis lectus non pretium lacinia. Proin porta, lorem id tristique malesuada, quam felis feugiat ipsum, quis auctor elit odio at purus. Nam bibendum lectus id nibh malesuada, vel tristique augue pulvinar. Phasellus tempus mauris euismod libero pretium luctus. Curabitur arcu enim, tempor in ante eget, viverra faucibus risus. Nulla rutrum sollicitudin rhoncus.',
			});
		}

		this.setState({
			notes: loremIpsumNotes,
		});
	}

	toggleMenu = () => {
		this.setState({
			...this.state,
			notes: [ ...this.state.notes ],
			toggleMenu: !this.state.toggleMenu,
		});
	}

	render() {
		return (
			<div className = 'App'>
				<div className = 'nav slide-down-anim'>
					<header>
						<div className = 'lambda-notes'>
							Lambda<br className = 'desktop' />
							Notes
						</div>

						<div 
							className = 'hamburger-menu-container phone' 
							onClick = { this.toggleMenu }
						>
							<i className = { `fas ${ this.state.toggleMenu ? 'fa-times' : 'fa-bars' }` } />
						</div>
					</header>

					<div className = { `btn-container ${ this.state.toggleMenu ? '' : 'display-none' }` }>
						<NavLink 
							exact to = '/' 
							className = 'btn' 
							activeClassName = 'active-btn'
						>View Your Notes</NavLink>

						<NavLink 
							to = '/create-new' 
							className = 'btn' 
							activeClassName = 'active-btn'
						>+ Create New Note</NavLink>
					</div>
				</div>

				<Route 
					exact path = '/'  
					render = { () => <ListView notes = { this.state.notes } /> } 
				/>

				<Route path = '/create-new' component = { CreateNewView } />

				<Route path = '/note/:id' render = { props => <NoteView id = { Number(props.match.params.id) } note = { this.state.notes[Number(props.match.params.id)] } /> } />

				<Route path = '/edit/:id' render = { props => <EditView id = { Number(props.match.params.id) } note = { this.state.notes[Number(props.match.params.id)] } /> } />
			</div>
		);
	}
}

export default App;
