import React from 'react'

import { connect } from 'react-redux'
import { getNotes } from '../actions/noteAction'

class ReactSort extends React.Component {
    constructor(){
        super();
        this.state = {
            notes: []
        }
    }

    componentDidMount(){
        this.props.getNotes()
    }



    render(){
        return (
            <div>
                ReactSort Testing
                {console.log(this.props.notes)}
                {this.props.notes.map(note => {
                    return (
                        <div key={note._id}>
                            <h1>{note.title}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, { getNotes})(ReactSort)
//export default ReactSort