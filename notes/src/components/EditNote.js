import React from "react";
import { Page, PageHeader, NoteBody } from "./styles";
import Form from "./Form";

class EditNote extends React.Component {
	state = {
        title: "",
        body: "",
      };
    
      handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSubmit({
            title: this.state.title,
            body: this.state.body,
        });
        this.setState({
            title: "",
            body: "",
        });
        this.props.history.push("/notes")
    };

	render() {
		return (
			<Page>
				<PageHeader>Edit Note:</PageHeader>
				<Form
					body={this.state.body}
					title={this.state.title}
					handleSubmit={this.handleSubmit}
					handleInputChange={this.handleInputChange}
					label="Edit"
				/>
			</Page>
		);
	}
}

export default EditNote;