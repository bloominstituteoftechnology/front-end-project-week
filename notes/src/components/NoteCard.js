import React from 'react';
import axios from 'axios';
class NoteCard extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        note: []
      }
  }

  componentDidMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then(res => this.setState({note: res.data}))
      // .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  // fetchCard = () => {
  //   axios
  //     .get(`https://killer-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }

  render() {
    return(
        <div>
        {console.log("id", this.props.match.params.id)}
        {console.log("notes", this.props.notes)}
        </div>
        )
  }
};
export default NoteCard;
