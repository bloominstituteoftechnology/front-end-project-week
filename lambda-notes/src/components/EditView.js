import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReq, fetchNoteReq, updateReq } from '../actions';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class EditView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            tags: [],
            tag: '',
            title: null,
            textBody: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id);
        this.props.fetchNoteReq(id);
        this.setState({title: this.props.note.title, textBody: this.props.note.textBody, toggle: false, tag: ''});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleUpdate = (e) => {
        // if(this.state.title === '' && this.state.textBody === '') return null;

        const id = this.props.match.params.id;
        const note = {
            title: this.state.title,
            textBody: this.state.textBody,
            tags: this.state.tags
        }

        this.props.updateReq(id, note);

    };

    setTags = (tags) => {
        this.setState({tags});
    };

    handleTag = (e) => {
        if(this.state.tag === '') return null;
        const tags = this.props.tags;
        const newTag = this.state.tag;
        tags.push(newTag);
        // console.log(tags);
        this.setTags(tags);
    };

    handleTagClick = (id) => {
        let tags = this.props.tags;
        tags.splice(id, 1);
        console.log(tags);
        this.setState({tags, tag: ''});
    };

    render() {
        // console.log(this.props);
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
                    <label>tags: {this.props.note ? this.props.tags.map((tag, index) => <span key={index} id={index} onClick={() => this.handleTagClick(index)}>{`${tag}`}</span>) : ``}</label>
                    <input
                        name="tag"
                        placeholder="Note Tag"
                        value={this.state.tag}
                        onChange={this.handleChange}
                    />
                </form>
                <div className="EditView-buttons">
                    <button onClick={this.handleTag}>Add Tag</button>
                    <Link to={`/note/${this.props.match.params.id}`}><button onClick={() => {
                        this.handleUpdate();
                        setTimeout(window.location.reload(), 3000);
                    }}>Update</button></Link>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ notes }) => {
    // console.log(notes);
    return {
        note: notes.note,
        tags: notes.note.tags
    };
}

export default connect(mapStateToProps, { fetchReq, fetchNoteReq, updateReq })(EditView);