import React, { Component } from 'react';
import styled from 'styled-components';
import NoteCard from '../components/NoteCard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

const Card = posed.span({
    enter: {opacity: 1, translateY: 0, transition: { duration: 1000 }, delay: ({ i }) => i * 100},
    exit: {opacity: 0, translateY: 100},
    draggable: true,
    // hovered: { scale: 1.5 },
})

const containerConfig = {
   mount: { opacity: 1, translateX: 0, transition: { duration: 1000 }, beforeChildren: true},
   unmount: { opacity: 0, translateX: -100 },
}
const StyledNotesContainer = styled(posed.div(containerConfig))`
    padding: 5%;
    background: #F3F3F3;
    width: 100%;
    height: 100vh;
    min-height: 100%;
    margin-left: 24%;
`;

const StyledNotes = styled.div`
    display: flex;
    flex-flow: row wrap;

`;

const StyledCard = styled(Card)`
    margin: 3%;
`;

class NotesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            mount: false,
        }
    }

    componentDidMount(){
        console.log("this.state.mount", this.state.mount);
        setTimeout(this.setState({ mount: true }), 5000);
        console.log("this.state.mount", this.state.mount);
    }

    componentWillUnmount(){
        this.setState({ mount: false })
    }
    render(){
        return(
            <StyledNotesContainer pose={this.state.mount ? 'mount' : 'unmount'}>
                <h3>Your Notes:</h3>
                <StyledNotes>
                    <PoseGroup animateOnMount>
                    {this.props.notes.map((note, i) => {
                        return <StyledCard pose={'exit'} key={note._id} i={i} ><NoteCard note={note}key={note._id} />
                                </StyledCard>
                    })}
                    </PoseGroup>
                </StyledNotes>
            </StyledNotesContainer>
            
        );
    }

}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        fetching: state.fetching,
        fetched: state.fetched,
        adding: state.adding,
        added: state.added,
        error: state.error
    }
}

export default withRouter(connect(mapStateToProps, {})(NotesContainer));