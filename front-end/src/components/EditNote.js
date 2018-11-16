import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Modal, Paper} from './Styled';
import {getNote, editNote, getNotes} from "../actions";
import {connect} from "react-redux";
import {FlexColumn, FlexRow} from "./Styled";

class NoteEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.props.getNote(this.props.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.note && nextProps.note._id !== this.state._id) {
            this.setState(nextProps.note);
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {_id, textBody, title} = this.state,
            update = {textBody, title};

        this.props.editNote(_id, update)
            .then(() => this.props.getNotes())
            .then(() => this.props.history.push("/"));
    };

    handleDelete = () => {

    };

    render() {
        const {loading, error, note} = this.props;
        const {title, textBody, _id} = this.state;

        return (
            <Modal>
                <Paper>
                    {loading && <h4>Hang tight...</h4>}
                    {error && <><h1>Error</h1><p>{error}</p></>}
                    {note &&
                    <FlexColumn>
                        <FlexRow width="full" justifyEnd>
                            <Link to={`/edit/${_id}`}>Edit</Link>
                        </FlexRow>

                        <form onSubmit={this.handleSubmit}>
                            <FlexColumn>
                                <input value={title} onChange={e => this.setState({title: e.target.value})}/>
                                <textarea value={textBody} onChange={e => this.setState({textBody: e.target.value})}/>
                                <button type="submit">UPDATE</button>
                            </FlexColumn>
                        </form>
                    </FlexColumn>
                    }
                </Paper>
            </Modal>
        );
    }
};

NoteEdit.propTypes = {};

const mapStateToProps = ({loading, error, note}) => {
    return {
        loading,
        error,
        note
    }
};

export default connect(mapStateToProps, {getNote, editNote, getNotes})(withRouter(NoteEdit));
