import React, {Component} from 'react';
import Pagination from './Pagination';
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
          renderedNotes: [],
          page: 1,
        };
        this.handlePageChange = this.handlePageChange.bind(this);
      }

      handlePageChange(page) {
        const renderedNotes = this.props.notes.slice((page - 1) * 9, (page - 1) * 9 + 9);

        this.setState({ page, renderedNotes });
      }

      componentDidMount() {
        setTimeout(() => {
          this.setState({ renderedNotes: this.props.notes.slice(0, 9), total: this.props.notes.length });
        })
      }



    render() {
        const { page, total, renderedNotes } = this.state;
        return (
            <ListView>
                <Search {...this.props}/>
                    <h1>Your notes: </h1>
                <ListNotes>
                    { renderedNotes.map(note => { 
                        return (
                            <Note
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                content={note.content}
                            />
                        )
                    }) }
                </ListNotes>
                <Pagination
          margin={2}
          page={page}
          count={Math.ceil(total / 2)}
          onPageChange={this.handlePageChange}
        />
            </ListView>
        );
    }
}

export default NotesList;