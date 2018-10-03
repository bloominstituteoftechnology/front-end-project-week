import React from 'react';

class NoteDelete extends Component {
    state = {  

    }

    componentDidMount() {
        console.log(this.props.match.params);
    }
    render() { 
        return (  
        <h1>Delete</h1>
        );
    }
}
 
export default NoteDelete;