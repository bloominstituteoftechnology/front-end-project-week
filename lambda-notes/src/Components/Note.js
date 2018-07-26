import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note:[]
        };
    }

    componentDidMount() {
        const id = this.props.match.match.params.id-1;
        this.setState({note:this.props.noteEntries[id]})
    }

    render() {
        return (
            <div>
                <div>
                    <Link to={`/editNote/${this.state.note.id}`}>
                        <button>edit</button>
                    </Link>
                    <br />
                    <button>delete</button>
                </div>
                
                <div>
                    TITLE:{this.state.note.title}
                    <br />
                    TEXT: {this.state.note.textBody}
                </div>
            </div>
        ) 
    }
}

// const Note = props => {
//     return (
//         <div>
//             <div>
//                 <Link to={"/editNote"}>
//                     <button>edit</button>
//                 </Link>
//                 <br />
//                 <button>delete</button>
//             </div>
            
//             <div>
//                 TITLE:{props.noteEntries[1].title}
//                 <br />
//                 TEXT: {props.noteEntries[1].textBody}
//             </div>
//         </div>
//     )
// }

export default Note