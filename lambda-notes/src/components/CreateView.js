import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const CreateView = props => {
    if(!props.fetched) return <img src={logo} className="App-logo" alt="logo" style={{margin: "auto", height: "50%"}}/>;

    return (
        <div className="CreateView-container">
            <div className="CreateView-header">
                <h2>Create New Note:</h2>
            </div>
            <form className="CreateView-content" onSubmit={props.handleSubmit}>
                <input
                    name="title"
                    placeholder="Note Title"
                    value={props.title}
                    onChange={props.handleChange}
                    />
                <textarea
                    name="textBody"
                    placeholder="Note Content"
                    value={props.textBody}
                    onChange={props.handleChange}
                    />
            </form>
            <div className="CreateView-buttons">
                <Link to="/"><button onClick={props.handleSubmit}>Save</button></Link>
            </div>
        </div>
    );
};

export default CreateView;