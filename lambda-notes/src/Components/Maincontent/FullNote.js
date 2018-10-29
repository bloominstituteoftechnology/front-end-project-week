import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FullNote extends React.Component {
  constructor(){
    super();
    this.state = {
        edit: []
    }
  }

  componentDidMount() {
    const id = params.match.id;
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}
`)
.then(res => {
  this.setState({ edit: res.id})
})
  }

	return (
		<Link to={this.state.edit}>
			<h1>{}!</h1>
			<p>{}</p>
		</Link>
	);
};

export default FullNote;
