import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Responsive, WidthProvider} from 'react-grid-layout';
require('../../node_modules/react-grid-layout/css/styles.css');
require('../../node_modules/react-resizable/css/styles.css');

const ReactMarkdown = require('react-markdown');
const ResponsiveGridLayout = WidthProvider(Responsive);

const Button = styled.button`
    text-decoration: underline;
    border: none;
    color: #2AB4AE;
    background: none;
    height: 30px;
`;

const List = styled.div`
    background: #F1F1F1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    width: 900px;
`;

const H2 = styled.h2`
    z-index:1;
`;

const SmallNote = styled.div`
    height: 250px;
    width: 250px;
    border: 1px solid lightgray;
    text-align: left;
    background: white;
    overflow: hidden;
    line-height: 2rem;
    margin: 0.5rem;
    box-shadow: 1px 1px 30px 1px gray;
    :hover{
        box-shadow: 1px 1px 25px 5px #2AB4AE;
    }
`;
const Title = styled.div`
    font-weight: 800;
    border-bottom: 1px solid lightgray;
    padding: 0.5rem;
    background: lightgray;
`;
const Content = styled.div`
    padding: 0.5rem;
    margin: 0.5rem 1rem;
    word-wrap: break-word;
    width: 100%;
    height: 100%;
`;

class ListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
            notesPerPage: 3,
        }
        this.handlePageChange = this.handlePageChange.bind();
    }
    handlePageChange = e => {
        this.setState({ currentPage: Number(e.target.id)})
    }
    setNotesPerPage = e => {
        this.setState({ notesPerPage: e.target.value })
    }
    render(){
        let totalNotes = this.props.notes.length;
        const { currentPage, notesPerPage } = this.state;
        const indexOfLastNote = currentPage * notesPerPage;
        const indexOfFirstNote = indexOfLastNote - notesPerPage;
        const currentNotes = this.props.notes.slice(indexOfFirstNote, indexOfLastNote);
        const pageNumbers = [];
        for ( let i = 1; i <= Math.ceil(totalNotes/notesPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(num => {
            return (
                <ul key={num} 
                    id={num} 
                    onClick={this.handlePageChange}
                    style={{ color: '#2AB4AE', textDecoration: 'underline', position:'center'}}>
                    {num}
                </ul>
            );
        });
        let layout = [
            {i: 'box', x: 0, y: 0, w: 4, h: 4}
        ];
        const renderNotes = currentNotes.map(note => {
            return(
                <SmallNote key={note.id}>
                    <Title>{note.title}</Title>
                    <Link to={`/note/${note.id}`}
                            style={{ textDecoration: 'none',
                                    color: 'black' }}>
                        <Content>
                            <ReactMarkdown source={note.textBody} />
                        </Content>
                    </Link>
                </SmallNote>
            )
        });
        return(
            <div>
                <List>
                    <H2>Your Notes:</H2>
                    <div style={{display:'flex'}}>
                        {renderPageNumbers}
                        <div style={{position: 'absolute', right: '400px'}}>
                            View <Button onClick={this.setNotesPerPage} value={1}>1</Button> 
                            <Button onClick={this.setNotesPerPage} value={2}>2</Button>
                            <Button onClick={this.setNotesPerPage} value={3}>3</Button>
                            <Button onClick={this.setNotesPerPage} value={4}>4</Button>
                            <Button onClick={this.setNotesPerPage} value={5}>5</Button>
                            notes per page
                        </div>
                    </div>
                    <ResponsiveGridLayout className='layout'
                    layout={layout}
                    breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{lg: 4, md: 4, sm: 4, xs: 4, xxs: 2}}
                    rowHeight={250}
                    width={1200}
                    autoSize={true}>
                        {renderNotes}
                    </ResponsiveGridLayout>
                </List>
            </div>
        );
    }

};

export default ListView;