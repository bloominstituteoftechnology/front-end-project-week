import React from 'react';
import {AddTaskBtn, AddTaskBtnText, TaskInput, ClearTaskBtn, ClearTaskBtnText, TaskTitle} from '../../Styles/NoteTasksStyles'

const TodoForm = props => {
    return (
        <div>
        <div className="introBox">
                    <TaskTitle>Add tasks to this note?</TaskTitle>
                </div>

        <div className="formContainer">
            
            <div className="formDiv">
        
                <form onSubmit={props.addNewTask}>
                <TaskInput 
                type="text" 
                value={props.inputTask}
                name="inputTask"
                onChange={props.changeHandler}
                placeholder="Enter new task here"
                />
                <AddTaskBtn type="submit" onClick={props.addNewTask}><AddTaskBtnText>Add Task</AddTaskBtnText></AddTaskBtn>
                </form>

                <ClearTaskBtn onClick={props.clearTask}><ClearTaskBtnText>Clear Completed</ClearTaskBtnText></ClearTaskBtn>

            </div>

        </div>
        
        </div>
    )
}

export default TodoForm;