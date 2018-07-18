import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitReq } from '../actions';
import logo from '../logo.svg';

class CreateView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    componentDidMount() {
        this.setState({title: '', textBody: ''});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title === '' && this.state.textBody === '') return null;

        const note = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        this.props.submitReq(note);
    }

    render() {
        // if(!props.fetched) return <img src={logo} className="App-logo" alt="logo" style={{margin: "auto", height: "50%"}}/>;

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
                        name="textBody"
                        placeholder="Note Content"
                        value={this.state.textBody}
                        onChange={this.handleChange}
                        />
                </form>
                <div className="CreateView-buttons">
                    <Link to="/"><button onClick={this.handleSubmit}>Save</button></Link>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ notes }) => {
    return {};
};

export default connect(mapStateToProps, { submitReq })(CreateView);