import React,{ Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addNote } from "../actions";

class AddNote extends Component {
    constructor(props){
        super(props)
        this.state= {
            title: '',
            body: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        const { title, body } = this.state;
        return (
            <div className="note-flex-props">
                <div className="note-view">
                    <div className="note-form">
                    <h3>Create New Note:</h3>
                        <form>
                            <input name="title" value={title} placeholder="Title" onChange={(e) =>     this.handleChange(e)}/>
                            <textarea name="body" value={body} placeholder="Content" onChange={(e) =>     this.handleChange(e)}/>
                            <Link className="button" to="/" onClick={() => this.props.addNote({title, body})}>Save</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { addNote })(AddNote);