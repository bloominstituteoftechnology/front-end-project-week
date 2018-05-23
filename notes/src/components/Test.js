import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

class Test extends Component {

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() { 
        console.log("Test Props:", this.props)
        return (
            <div>
                {this.props.notes.map(note => {
                    return (
                        <Container key={`${note._id}`}>
                            <Row>
                                <Col >
                                    <h1>{note.title}</h1>
                                    <p>{note.textBody}</p>
                                </Col>
                            </Row>
                        </Container>
                    )
                })}  
            </div>
         )
    }
}

const mapStateToProps = state => {
    console.log("State:", state);
    return {
        notes: state.notes,
        fetching: state.fetching
    }
}
 
export default connect(mapStateToProps, { fetchNotes })(Test);









// Code Below is a blank Test template for if I cut+paste ^this code out into a new component.

// import React, { Component } from 'react';

// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <div></div>
//          )
//     }
// }
 
// export default Test;