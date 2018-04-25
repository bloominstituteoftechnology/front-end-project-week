import React, { Component } from 'react';
import './NotesDisplay.css';

import { Link } from 'react-router-dom';
class NotesDisplay extends Component {
    render() {
        return (
            <div className="Note">
                <div className= 'Note-feature'> 
                    <h1> Lambda Notes </h1>
                    <button className ='Note-buttons'>
                        <Link to= '/'> View Your Notes </Link>
                    </button>
                    <button className ='Note-buttons'>
                        <Link to= '/newNote'> +Create New Note </Link>
                    </button>
                </div>
            <div className='Note-content'>
                <h1> Your Notes: </h1> 
                <div className= 'Note-notesDisplay'>
                        <div className='Note-notes'>
                            <Link to= '/noteView'>  
                                <h3> Note Title </h3> 
                                <p> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                                </p>
                            </Link>
                        </div>
                        <div className='Note-notes'>
                            <Link to= '/noteView'>  
                                <h3> Note Title </h3> 
                                <p> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                                </p>
                            </Link>
                        </div>
                        <div className='Note-notes'>
                            <Link to= '/noteView'>  
                                <h3> Note Title </h3> 
                                <p> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                                </p>
                            </Link>
                        </div>
                        <div className='Note-notes'>
                            <Link to= '/noteView'>  
                                <h3> Note Title </h3> 
                                <p> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                                </p>
                            </Link>
                        </div>
                        <div className='Note-notes'>
                            <Link to= '/noteView'>  
                                <h3> Note Title </h3> 
                                <p> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                                </p>
                            </Link>
                        </div>
                        <div className='Note-notes'>
                            <Link to= '/noteView'>  
                                <h3> Note Title </h3> 
                                <p> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                                </p>
                            </Link>
                        </div>
                        <div className='Note-notes'>
                            <Link to= '/noteView'>  
                                <h3> Note Title </h3> 
                                <p> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                                </p>
                            </Link>
                        </div>
                        <div className='Note-notes'>
                            <Link to= '/noteView'>  
                                <h3> Note Title </h3> 
                                <p> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                                </p>
                            </Link>
                        </div>
                        <div className='Note-notes'>
                            <Link to= '/noteView'>  
                                <h3> Note Title </h3> 
                                <p> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                                </p>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
        );
    }
}

export default NotesDisplay;