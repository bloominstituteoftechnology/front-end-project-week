import React from 'react';

import './notes.css';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: undefined,
            title: '',
            content: '',
            tagItem: '',
            tagsList: [],
        }
    }

    componentDidMount() {
        let note;
        if (this.props.type === 'Edit') {
            note = this.props.notes.find(note => {
                if (String(note.id) === this.props.match.params.id) {
                    return note;
                }
                return undefined;
            })
        }
        if (note !== undefined) {
            let tags = [];
            if (note.tags !== undefined) {
                tags = note.tags;
            }
            this.setState({
                note: note,
                title: note.title,
                content: note.content,
                tagsList: tags,
            })
        }
    }
    
    submitForm = e => {
        e.preventDefault();
        const note = {title: this.state.title, content: this.state.content, tags: this.state.tagsList};
        if (this.props.type === 'Create') {
            this.props.createNote(note);
            this.setState({
                title: '',
                content: '',
            })
        }
        if (this.props.type === 'Edit') {
            this.props.updateNote(this.props.match.params.id, note);
            this.setState({
                title: '',
                content: '',
            })
        }
    }

    updateValue = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    addTag = e => {
        console.log(`Tag list: ${this.state.tagsList}`)
        const updateTagList = this.state.tagsList;
        updateTagList.push(this.state.tagItem);
        this.setState({
            tagItem: '',
            tagsList: updateTagList
        })
    }

    render()
    {
        if (this.state.note === undefined & this.props.type === 'Edit') {
            return <h1>No note with that ID</h1>
        }
        return(
            <form onSubmit={this.submitForm} className='note-form'>
                <section>
                    <div className='note-form-title'>
                        {this.props.type === 'Create' ? 'Create Note' : 'Edit Note'}
                    </div>
                    <input className='title-input' 
                        name='title' 
                        value={this.state.title} 
                        placeholder={this.props.type === 'Create' ? 'Note Title' : ''} 
                        onChange={this.updateValue} 
                    />
                    <label>Tags</label>
                    <select className='tags-selection'
                        name='tagsList'
                        size='4'
                        select='multiple'
                    >
                    {Array.isArray(this.state.tagsList) ? this.state.tagsList.map(tag => {
                        return <option key={tag}>{tag}</option>
                    }) : ''}
                    </select>
                    <input className='tags-input'
                        name='tagItem'
                        value={this.state.tags}
                        placeholder={this.props.type === 'Create' ? 'Note Tags' : ''}
                        onChange={this.updateValue}
                    />
                    <button className='tags-submit' type='button' onClick={this.addTag}>Add Tag</button>
                </section>
                <p>
                    <textarea className='text-body-input' 
                        name='content' 
                        value={this.state.content} 
                        placeholder={this.props.type === 'Create' ? 'Note Content' : ''} 
                        onChange={this.updateValue} 
                    />
                </p>
                <button className='form-button' type='submit'>{this.props.type === 'Create' ? 'Add Note' : 'Update Note'}</button>
            </form>
        )
    }
}

export default NoteForm;