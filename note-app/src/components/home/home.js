import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [
                {
                    title: 'NoteTitle1',
                    body: 'akjdhfakfhakbfakbdakjdhfakfhakbfakbdakjdhfakfhakbfakbdakjdhfakfhakbfakbdakjdhfakfhakbfakbdakjdhfakfhakbfakbdakjdhfakfhakbfakbdakjdhfakfhakbfakbdakjdhfakfhakbfakbdakjdhfakfhakbfakbdakjdhfakfhakbfakbd',
                },
                {
                    title: 'NoteTitle2',
                    body: 'NoteBody2',
                },
                {
                    title: 'NoteTitle3',
                    body: 'NoteBody3',
                },
                {
                    title: 'NoteTitle4',
                    body: 'NoteBody4',
                },
                {
                    title: 'NoteTitle4',
                    body: 'NoteBody4',
                },
                {
                    title: 'NoteTitle4',
                    body: 'NoteBody4',
                },
                {
                    title: 'NoteTitle4',
                    body: 'NoteBody4',
                },
                {
                    title: 'NoteTitle4',
                    body: 'NoteBody4',
                },
                {
                    title: 'NoteTitle4',
                    body: 'NoteBody4',
                },
                {
                    title: 'NoteTitle4',
                    body: 'NoteBody4',
                },
            ]
        }
    }


    render() {
        return (
            <div className='Home'>
                <div className='Home__header'> Your Notes</div>

                <div className='Home__content'>
                    {this.state.notes.map(n => {
                        return (
                            <div className='container'>
                                <Link 
                                to='/note/:id'
                                className='Note'>
                                    <div className='Note__title'>{n.title}</div>
                                    <div className='Note__body'>{n.body}</div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Home;