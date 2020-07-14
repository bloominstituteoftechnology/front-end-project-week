import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchReq, submitReq } from '../actions';
import logo from '../logo.svg';

class CreateView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            tag: '',
            tags: []
        }
    }

    componentDidMount() {
        this.setState({title: '', content: '', tag: '', tags: []});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = () => {
        // e.preventDefault();
        if(this.state.title === '' && this.state.content === '') return null;

        const note = {
            title: this.state.title,
            content: this.state.content,
            tags: this.state.tags
        }

        this.props.submitReq(note);
    }

    handleTag = (e) => {
        if(this.state.tag === '') return null;
        const tags = this.state.tags;
        const tag = this.state.tag;
        tags.push(tag);
        
        this.setState({tags, tag: ''});
    }

    render() {
        console.log(this.props.history);
        return (
            <div className="CreateView-container">
                <div className="CreateView-header">
                    <h2>Create New Note:</h2>
                </div>
                <form className="CreateView-content" onSubmit={this.handleSubmit}>
                    <input
                        name="title"
                        placeholder="Note Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        />
                    <textarea
                        name="content"
                        placeholder="Note Content"
                        value={this.state.content}
                        onChange={this.handleChange}
                        />
                    <label>tags: {this.state.tags.length !== 0 ? (this.state.tags.map((tag) => <span>{`${tag} `}</span>)) : ``}</label>
                    <input
                        name="tag"
                        placeholder="Note Tag"
                        value={this.state.tag}
                        onChange={this.handleChange}
                    />
                </form>
                <div className="CreateView-buttons">
                    <button onClick={this.handleTag}>Add Tag</button>
                    <Link to="/"><button onClick={() => {
                        this.handleSubmit();
                        setTimeout(window.location.reload(), 3000);
                    }}>Save</button></Link>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ notes }) => {
    return {};
};

export default connect(mapStateToProps, { fetchReq, submitReq })(CreateView);