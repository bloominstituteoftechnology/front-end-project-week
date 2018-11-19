import React from 'react';
import axios from 'axios';

// take an id DONE
// has a form with title and textBody
// onClick axios post? or put
// new axios call with the ID in the url // first argument: props.params, second: input value
// sends an updated note with the same id? idk sounds right
// button? 




class UpdateNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            textBody: '',
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
        .then(response => {
            this.setState({title: response.data.title, textBody: response.data.textBody})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
            <p>{this.props.match.params.id}</p>
            <form></form>    
            </div>
            
        )
    }


}

export default UpdateNote