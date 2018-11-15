import React from 'react';
import { fetchingToDos } from '../actions';
import ToDo from './Todo';
import { connect } from 'react-redux';

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchingToDos();
    }

    render() {
        return (
            <div>
                {this.props.fetching ? <h3>Fetching To Dos</h3> : null }
                {this.props.error !== '' ? <h2>{this.prop.error}</h2> : ''}
                {this.props.toDos.map(toDo => 
                    <ToDo toDo={toDo} key={toDo.id} />)}
            </div>
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