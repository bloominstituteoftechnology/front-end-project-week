import React, { Component } from 'react';

const TodoForm = props => {
    // console.log('props from todos', props)
    return (
        <div>
            <form>
                {/* <input type='text' name='tags' placeholder='Add tags..' onChange={props.handleChange}/>  */}
                <input type='text' name='title' placeholder='Add title..' onChange={props.handleChange}/> 
                <textarea type='text' name='textBody' placeholder='Add text..' onChange={props.handleChange}/> 
                {/* <input type='text' name='id' placeholder='Add ID..' onChange={props.handleChange}/>  */}
                <input type='submit' value='Add Todo' onClick={props.handleSubmit}/>
            </form>
            <input type='submit' value='Update Todo' onClick={props.updateTodos}/>
            {/* <input type='submit' value='Delete Todo' onClick={props.deleteTodos}/> */}
        </div>
    )};

export default TodoForm;