import React from "react";
import ReactMarkdown from "react-markdown";

class Markdown extends React.Component {
	render() {
		return <ReactMarkdown source={this.props.text} />;
	}
}

export default Markdown;
