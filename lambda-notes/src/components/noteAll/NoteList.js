import React, { Component } from 'react';
import Notecard from './Notecard';
import { Link } from 'react-router-dom';

class NoteList extends Component {
    render() {
        return (
            <div className='col-12'></div>
                <div className='col-9 d-flex flex-row mt-5'>
                <h2 className='justify-self-start font-weight-bold noteHeader'>NOTES:</h2>
            <div className='row d-flex flex-row justify-content-around'>
                { this. props.cards.map( (card, i) => <div className='col-4'><NoteCard key={i} {...card } /></div> ) }
                    <Link className='link' to='/viewnote'>
                    <Notecard key={i} updateSelectedNote={this.props.updateSelectedNote} {...card }/></Link>
                </div>
            </div>
    );
};    

                    /*<Link className='col-4 noteLink' to='/viewnote'>
                    <Notecard />
                    </Link>

                    <Link className='col-4 noteLink' to='/viewnote'>
                    <Notecard />
                    </Link>

                    <Link className='col-4 noteLink' to='/viewnote'>
                    <Notecard />
                    </Link>

                    <Link className='col-4 noteLink' to='/viewnote'>
                    <Notecard />
                    </Link>

                    <Link className='col-4 noteLink' to='/viewnote'>
                    <Notecard />
                    </Link>

                    <Link className='col-4 noteLink' to='/viewnote'>
                    <Notecard />
                    </Link>

                    <Link className='col-4 noteLink' to='/viewnote'>
                    <Notecard />
                    </Link>

                    <Link className='col-4 noteLink' to='/viewnote'>
                    <Notecard />
                    </Link>

                    <Link className='col-4 noteLink' to='/viewnote'>
                    <Notecard />
                    </Link>
            </div>
        )
    } 
}*/

export default NoteList;