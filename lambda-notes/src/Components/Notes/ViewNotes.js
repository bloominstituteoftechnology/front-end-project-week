import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getNote, deleteNote } from '../../actions';
import { bindActionCreators } from 'redux'

const styled = {  //this is for the link to not look like an anchor tag
    textDecoration: 'none',
    // color: 'rgb(97, 76, 76)'
    color: 'black'
}


class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            tags: [],
            tagInput: '',
            id: 0
        };
    }

    inc = () => {
        this.setState({ id: 1 + this.state.id })
    }

    componentDidMount() {
        this.props.getNote(this.props.id);
    }


    removeNote = () => {
        this.props.deleteNote(this.props.id);
        let route = window.location.pathname.split('/')
        let newRoute = route.splice(0, route.length - 2).join('/')
        window.location.pathname = newRoute;
    }

    removeTag = id => {
        const { tags } = this.state;
        const newTags = tags.filter(tag => tag.id !== id);
        this.setState({ tags: newTags });
    }

    createTag = event => {
        event.preventDefault();
        const { tags, id, tagInput } = this.state;
        const newTag = {
            id: id,
            tag: `#${tagInput}`
        }
        this.inc();
        this.setState({ tags: tags.concat([newTag]), tagInput: '' });
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // componentWillReceiveProps(newProps) {   //this was where i tested for my EditNote component
    //     console.log('cwrp', newProps)
    //     this.setState({
    //         noteName: newProps.noteName,
    //         noteBody: newProps.noteBody
    //     })
    // }

    render() {
        return (
            <div className="mainContent" >
                {this.props.notes.map(note => {
                    return (
                        <div key={note._id} >
                            <div className="mainContent__options" >
                                <Link to={`/notes/${note._id}/edit`} style={styled} >
                                    <span className="mainContent__options--links" >edit</span>
                                </Link>
                            </div>
                            <div className="directory__title mainContent__title" >
                                {note.title}
                            </div>
                            <div className="mainContent__content mainContent__content--view" >
                                {note.textBody}
                            </div>
                        </div>)
                })}
                {this.state.tags ?
                    <div>
                        {this.state.tags.map((tag, index) => {
                            return (
                                <div key={`tag${tag.id}`} className="button tag" onClick={()=>this.removeTag(tag.id)} >
                                    {tag.tag}
                                </div>)
                        })}
                    </div> : null}
                <form className="mainContent__Form" onSubmit={this.createTag} >
                    <input
                        className="form__input form__input--title"
                        onChange={this.handleInputChange}
                        placeholder="Add a Tag"
                        value={this.state.tagInput}
                        name="tagInput"
                    />
                    <button className={"link__button"} type="submit">Add</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        notes: state.rootReducer.noteReducer.notes,
        id: ownProps.match.params.id,
    }

}

export default connect(mapStateToProps, dispatch => bindActionCreators({ getNote, deleteNote }, dispatch))(ViewNote);