import React, {Component} from 'react';
import Paginations from './Paginations';
import styled from 'styled-components';
import Note from './Note';
import Search from './Search';

const ListNotes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
`

const ListView = styled.div`
    width: 100%;
    background: #DCDCDC;
    > h1 {
        font-weight: bold;
        font-size: 2.4rem;
        margin: 10px;
    }
`

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    };

      onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        
        return (
            <ListView>
                <Search {...this.props}/>
                    <h1>Your notes: </h1>
                <ListNotes>
                    { this.state.pageOfItems.map(note => { 
                        return (
                            <Note
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                content={note.content}
                            />
                        )
                    })}
                </ListNotes>
                <Paginations items={this.props.notes} onChangePage={this.onChangePage} />
            </ListView>
        );
    }
}

export default NotesList;