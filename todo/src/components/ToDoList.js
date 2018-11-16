import React from 'react';
import { fetchingToDos } from '../actions';
import ToDo from './Todo';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ToDoListMainDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px 2%;

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
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchingToDos();
    }

    render() {
        return (
            <ToDoListMainDiv>
                <ToDoListH3>Your Notes:</ToDoListH3>

                {this.props.fetching ? <h3>Fetching To Dos</h3> : null }
                {this.props.error !== '' ? <h2>{this.prop.error}</h2> : ''}
                {this.props.toDos.map(toDo => 
                    <ToDo toDo={toDo} key={toDo.id} />)}
            </ToDoListMainDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        toDos: state.toDos,
        fetching: state.fetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {fetchingToDos})(ToDoList);