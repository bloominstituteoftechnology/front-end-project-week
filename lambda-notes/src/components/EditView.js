import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNoteReq, updateReq } from '../actions';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class EditView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            title: '',
            textBody: ''
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id);
        this.props.fetchNoteReq(id);
        this.setState({title: '', textBody: '', toggle: false});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleUpdate = (id) => {
        if(this.state.title === '' && this.state.textBody === '') return null;

        const note = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        this.props.updateReq(id, note);
    }

    render() {
        if(!this.props.note) return <img src={logo} className="App-logo" alt="logo" style={{margin: "auto", height: "50%"}}/>;

        return (
            <div className="EditView-container">
                <div className="EditView-header">
                    <h2>Edit Note:</h2>
                </div>
                <form className="EditView-content" onSubmit={this.handleUpdate}>
                    <input
                        name="title"
                        placeholder="Note Title"
                        value={this.state.title === "" ? this.props.note.title : this.state.title}
                        onChange={this.handleChange}
                    />
                    <textarea
                        name="textBody"
                        placeholder="Note Content"
                        value={this.state.textBody === "" ? this.props.note.textBody : this.state.textBody}
                        onChange={this.handleChange}
                    />
                </form>
                <div className="EditView-buttons">
                <Link to={`/note/${this.props.note["_id"]}`}><button onClick={() => this.handleUpdate(this.props.match.params.id)}>Update</button></Link>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ notes }) => {
    console.log(notes);
    return {
        note: notes.note
    };
};

export default connect(mapStateToProps, { fetchNoteReq, updateReq })(EditView);