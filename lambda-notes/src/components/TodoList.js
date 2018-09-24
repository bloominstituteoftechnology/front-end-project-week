import React, {Component, Fragment} from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    task: 'walk the dog',
                    id: 1,
                    completed: false
                }
            ],
            item: '',
        };
    }

    render() {
        return (
            <Fragment>
                <ul>
                    {this.state.list.map(item => <TodoItem key={item.id} item={item} />)}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;