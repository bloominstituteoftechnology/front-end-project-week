import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LeftColumnPanel extends Component {
	state = {
    title: '',
	  content: '',
		redirect: false,
  };

	render() {
		return (
		  <div className="LeftColumnPanel">
			<div className="RightColumn" >
			<div className="CreateNoteText">
			 Create New Note:
			</div>
			<div className="CreateNoteTitle">
			<text
			  name="title"
				placeholder="Note Title"
				value={this.state.title}
        rows="1"
				column="55"
				onChange={this.doChange}
				/>
				</div>
				<div className="CreateNoteContent">
				<text
				  name="Content"
          placeholder="Note Content"
					value={this.state.content}
				  rows="18"
				  column="75"
					onChange={this.doChange}
					/>
					</div>
					<Navigator activeClassName='NavButton' to='/viewnotes'>
					  <div className="button CreateNoteSave" onClick={this.doSubmit}>
						<b>Save</b>
						</div>
						</Navigator>
						</div>
					</div>
				)
		}

	 doChange = (event) => {
		 event.preventDefault();
		 this.setState(
				 { [event.target.name]: event.target.value }
				)
		  }
	    doSubmit = (event) => {
				event.preventDefault();

				this.setState(
						{ title: '', content: '', redirect: true }
				);
    }
}

/*const LeftColumnPanel = (props) => {

	return (
			<div className="LeftColumnPanel">
			<p> Lambda Notes </p>
			<button>View Your Notes</button><br />
      <button>+Create New Note</button>
		</div>
		);
};*/

export default LeftColumnPanel;
