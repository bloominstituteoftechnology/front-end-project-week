import React , { Component } from 'react';

export default class NewNote extends Component {
 
    render() {
        return (
            <div>
                <h2>Create new note</h2>
                <form>
                    <input
                        type="text"
                        placeholder= "Note Title"
                    />
                    <input
                        type="text"
                        placeholder= "New Content"
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}