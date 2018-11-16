import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { createNote } from "../actions";
import { connect } from "react-redux";

class CreateNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            textBody: "",
            tags: []
        }
    }

    handleSubmit = e => {
      e.preventDefault();

      this.props.createNote(this.state)
    };

    render() {
        const { title, textBody } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input value={title} placeholder="Title" onChange={e => this.setState({title: e.target.value})} />
                <input value={textBody} placeholder="Text" onChange={e => this.setState({textBody: e.target.value})} />
                <button type="submit">ADD</button>
            </form>
        );
    }
}

CreateNote.propTypes = {};

const mapStateToProps = ({ loading, error }) => {
    return {
        loading,
        error
    }
};

export default connect(mapStateToProps, { createNote })(CreateNote);
