import React, { Component } from 'react';
import './css/note.css';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
  import { Link } from 'react-router-dom';
//   import CreateNote from './CreateNote';


  const Notes = props => {
    
    
    console.log("Props: ", props)
      return (
        <div className="itemFlex">
            {props.listOfNotes.map((item, i) => {
                return (
                    <Card className="note"  key={i}>
                        <Link to="/NoteView">
                            <CardBody>
                                <CardTitle className="cardTitle"><h4>{item.title}</h4></CardTitle>
                                    <hr />
                                <CardText className="cardBody">{item.comment}</CardText>
                            </CardBody>
                        </Link>
                    </Card>
                )
            })}
        </div>
    )
  }


export default Notes;

// export default class CreateNote extends Component {
//     constructor() {
//         super();
//     }

//     render() {
//                  console.log("Props, ", this.props.objectHolder)
//               return (
//                 <div className="itemFlex">
//                     {this.props.objectHolder.map((item, i) => {
//                         return (
//                             <Card className="note"  key={i}>
//                                 <Link to="/notesView">
//                                     <CardBody>
//                                         <CardTitle>{item.title}</CardTitle>
//                                             <hr />
//                                         <CardText>{item.comment}</CardText>
//                                     </CardBody>
//                                 </Link>
//                             </Card>
//                         )
//                     })}
//                 </div>
//             )
//           }
//         } 


// *****************************************************