import React,{ Component } from "react";
import { connect } from "react-redux";
import { addNote, resetStore, logOut } from "../actions";

class AddNote extends Component {
    constructor(props){
        super(props)
        this.state= {
            title: '',
            body: '',
            userId: ''
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        if (!token) {
            this.props.resetStore();
            this.props.logOut();
            this.props.history.push('/');
        } else {
            const id = this.props.id;
            this.setState({ userId: id });
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit = (e, note) => {
        e.preventDefault();
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        this.props.addNote(note, requestOptions)
            .then(() => this.props.history.push('/notes'))
            .catch(err => console.log(err));
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
                            <button className="button" to="/notes" onClick={(e) => this.handleSubmit(e, this.state)}>Save</button>
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

export default connect(mapStateToProps, { addNote, resetStore, logOut })(AddNote);