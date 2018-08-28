import React from "react";



class Notes extends React.Component {
	state = {
    notes: [
      {
      id: 0,
      title: "Is this the real life?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
      id: 1,
      title: "Is this just fantasy?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
      id: 2,
      title: "Caught in a landslide",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
      id: 3,
      title: "No escape from reality",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      }
    ]
  };
  
	render() {
		return (
			<div>
				<h3>Your Notes:</h3>
				{this.props.notes.map(note => (
					<div>
						<h4>{note.title}</h4>
						<p>{note.text}</p>
					</div>
				))}
			</div>
		);
	}
}
export default Notes;