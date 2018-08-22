
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Container, Col } from 'reactstrap';
import DeleteModal from './DeleteModal'
 import './Note.css';
 
 class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {}
          
        };
    }
     componentDidMount() {
        let noteID = this.props.match.params.id;
        const note = this.state.notes.find(
            note => note.id === Number(noteID)
        );
        if (!note) return;
        this.setState({note});
    }

 


     render() {
        const {title, text} = this.state.note;
        return (
            <Container className="note">
                <Row noGutters>
                    <Col xs="10"></Col>
                    <Col xs="1">
                        <Link style={{ color: "black" }} to="/edit"><i class="fas fa-edit"></i></Link>
                    </Col>
                    <Col xs="1">
                        <DeleteModal note={this.state.note} deleteNote ={this.props.deleteNote}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>{title}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{text}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
};
 export default Note;



























// import React from 'react';
// import { Link } from 'react-router-dom';
// import DeleteModal from './DeleteModal'
// import './Note.css'
//   const Note = props => {
//     const note = props.notes.find(
//          note => note.id === Number(props.match.params.id)
//     );
//       return (
//         <div className="note">
//         <Link to="/edit"><i class="fas fa-edit"></i></Link>
//            <Link to="/delete"><i class="fas fa-trash-alt"></i></Link>
//              <h2>{note.title} </h2>
//              <p>{note.text}</p>
//          </div>
//      );
//    ;}
//  export default Note;