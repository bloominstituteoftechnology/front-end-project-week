import React from 'react';
import { fetchingToDos } from '../../actions';
import ToDo from '../Todo';
import { connect } from 'react-redux';
import styled from 'styled-components';


const ToDoListMainDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px 2%;

`;

const ToDoListDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const ToDoListH3 = styled.h3`
    color: 4A4A4A;
    font-size: 3.2rem;
    text-align: left;
    margin-top: 90px;
    color: #4A4A4A;.
    letter-spacing: .1rem;
    width: 100%;
    padding: 0px 2%;
`;

class ToDoList extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         fetching: false,
    //     }
    // }

    componentDidMount() {
        this.props.fetchingToDos();
    }

    render() {
        return (
            <ToDoListMainDiv>
                <ToDoListH3>Your Notes:</ToDoListH3>
                <ToDoListDiv>
                    {this.props.notes.map(note => (
                        < ToDo note={note} key={note._id} id={note._id} textBody={note.textBody} title={note.title} getToDo={this.props.getToDo} history={this.props.history} />
                    ))}
                </ToDoListDiv>
            </ToDoListMainDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        fetching: state.fetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, { fetchingToDos })(ToDoList);