import React from 'react';
import { connect } from 'react-redux';

class FullNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            note: []
        }
    }

    componentDidMount(){
        const note = this.props.notes.find(item=> `${item._id}` === this.props.match.params.id)
        this.setState({
            note: note
        })
    }

    render(){
        if(!this.state.note) return null;
        return(
            <div>
                <h3>edit</h3>
                <h3>delete</h3>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
};

export default connect(mapStateToProps)(FullNote);