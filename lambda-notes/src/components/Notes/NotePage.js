import React from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

class NotePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            isLoaded: false,
            shouldRedirect: false,
            title: '',
            textBody: '',
            error: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                if (response.data.name) {
                    this.setState({
                        error: true
                    })
                } else {
                    this.setState({
                        title: response.data.title,
                        textBody: response.data.textBody,
                        isLoaded: true
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    editHandler = () => {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }));
    }

    deleteHandler = () => {
        const id = this.props.match.params.id;
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(() => {
                this.setState({
                    shouldRedirect: true
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.shouldRedirect) {
            return <Redirect to="/" />
        } else {
            if (!this.state.isLoaded) {
                if (this.state.error) {
                    return (
                        <div className="note-page-wrapper">
                            <h1>Page Not Found 404</h1>
                        </div>
                    )
                }
                return (
                    <div className="note-page-wrapper">
                        <h1>Loading...</h1>
                    </div>
                )
            } else {
                return (
                    <div className="note-page-wrapper">
                        <div onClick={this.editHandler}>{!this.state.isEditing ? 'edit' : 'cancel'}</div>
                        <div onClick={this.deleteHandler}>delete</div>
                        {!this.state.isEditing ?
                            <div>
                                <h1>{this.state.title}</h1>
                                <p>{this.state.textBody}</p>
                            </div> :
                            <form>
                                <input type="text" value={this.state.title} />
                                <input type="text" value={this.state.textBody} />
                                <button type="submit">Submit</button>
                            </form>}
                    </div>
                    )
                }
            }
        }
    }
    
export default NotePage;