import React, {
	Component
} from "react";
export default class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			notes: ""
		};
	}
	inputHandler = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	submitHandler = e => {
		e.preventDefault();
	};
	render() {
		return ( < div className = "formdiv" > < form > < input type = "text"
			onChange = {
				this.inputHandler
			}
			name = "title"
			placeholder = "Title" / > < input type = "text"
			onChange = {
				this.inputHandler
			}
			name = "notes"
			placeholder = "Notes" / > < input type = "submit"
			value = "Submit"
			onClick = {
				this.props.submit
			}
			/> < /form> < /div>);
	}
}