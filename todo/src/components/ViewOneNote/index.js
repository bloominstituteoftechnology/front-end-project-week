import React from 'react';
import { connect } from 'react-redux';
import { deleteToDo } from '../../actions';
import { withRouter } from 'react-router-dom';
import '../App/index.css';
import styled from 'styled-components';
import DeleteModal from '../DeleteModal';

const UpdateToDoDiv = styled.div`
    margin: 0px 4%;
`;

const SpanDivs = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const SpanButton = styled.span`
    text-decoration: underline;
    margin-left: 25px;
    cursor: pointer;
    font-size: 2.0rem;
    margin-top: 25px;
    font-weight: 600;
`;

const TitleH3 = styled.h3`
    font-size: 3.0rem;
    border-bottom: 2px solid #BCBCBC;
    width: 100%;
    min-width: 228px;
    margin: 0px;
    padding: 8px 0px;
    margin-bottom: 10px;
    text-shadow: -1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey;
    font-weight: 400;
`;

const SingleTextP = styled.p`
    width: 85%;
    height: 500px;
    margin: 0px 4%;
    font-size: 2.0rem;
    padding: 10px 3%;
    border: 2px solid lightgrey;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    margin-bottom: 20px;
`;

class ViewOneNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: [],
            delete: false,
        }
    }

    componentDidMount() {
        const note = this.props.notes.find(item => `${item._id}` === this.props.match.params.id);
        this.setState({
            note: note,
        })
    }

    deletePopUp = (event) => {
        event.preventDefault();
        this.setState({
            delete: !this.state.delete
        })
    }

    closeButton = () => {
        this.setState({
            delete: !this.state.delete
        })
    }

    deleteThatNote = () => {
        this.props.deleteToDo(this.state.note._id)
        window.location.href = '/notes';
    }

    updateRoute = () => {
        this.props.history.push(`/edit/${this.state.note._id}`)
    }


    render() {
        if (!this.state.note) return null;

        return (
            <div>
                {this.state.fetching ? null : (

                    <UpdateToDoDiv key={this.props.id}>
                        <SpanDivs>
                            <SpanButton onClick={this.updateRoute}>edit</SpanButton>
                            <SpanButton onClick={this.deletePopUp}>delete</SpanButton>
                        </SpanDivs>

                        <TitleH3>{this.state.note.title}</TitleH3>
                        <SingleTextP>{this.state.note.textBody}</SingleTextP>

                    </UpdateToDoDiv>
                )}
                {this.state.delete ? <DeleteModal delete={this.deleteThatNote} closeForm={this.closeButton} /> : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
};

export default withRouter(connect(mapStateToProps, { deleteToDo })(ViewOneNote));