import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Note from './Note';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export const HomeContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    border-left: 2px solid #8e8b8b;
    padding: 35px;
    background-color: #e6e0e0;
    > div {
        font-size: 22px;
        text-align: start;
        line-height: 35px;
    }
`

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`



export const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    height: 130px;
    > h1 {
        color: #545252;
    }
`

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        this.setState({
            notes: this.props.notes
        })
    }

    render() {
    const arr = this.props.search ? 
    this.props.notes.filter(note => note.title.toLowerCase().includes(this.props.search.toLowerCase()) 
    || note.textBody.toLowerCase().includes(this.props.search.toLowerCase())) : this.props.notes;
    return      <HomeContainer>
                    <HeaderContainer>
                        <h1>Your Notes:</h1>
                    </HeaderContainer>
                    <CardWrapper>
                            {arr.map((note, index) => <Note history={this.props.history}
                            key={note._id}
                            index={index}
                            id={note._id} 
                            title={note.title} 
                            textBody={note.textBody} />).reverse()}              
                    </CardWrapper>   
                </HomeContainer>
    }
}

const mapStateToProps = state => {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(DragDropContext(HTML5Backend)(Home));