import React from 'react';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }
render(){
 return(
 <div className="note">
    <h3>{this.props.note.title}</h3>
<h4>{this.props.note.textBody}</h4>
    </div>
 )
}
}

export default Note;