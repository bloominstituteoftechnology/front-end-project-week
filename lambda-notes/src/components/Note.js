import React,  { Component }  from 'react';
import '../App.css';

class Note extends Component {
constructor(props) {
    super(props);
    this.state = {
        note:null,

    };
}


// componentDidMount() {
//     const {id} = this.props.match.params.id;
    
//     fetch(`http://localhost:3000/notes/${id}`)
//     .then((note) => {
//       this.setState(() => ({note}))
//     })
//   }



render(props) {
    console.log(props)
    return ( 
        <div className="note-card">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
        </div>
     );
}
}



export default Note
