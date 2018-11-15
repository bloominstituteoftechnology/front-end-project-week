import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/actions';

const HomeContainer = styled.div`
display: flex;
justify-content: space-between;
`

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return  <HomeContainer>
                    <h1>Home Component</h1>
                    <button onClick={this.props.fetchNotes} >Click Me</button>
                </HomeContainer>
    }
}

export default connect(()=>{return{}}, {fetchNotes} )(Home);