import React from 'react'
import {Link} from 'react-router-dom' 


class SearchFullNote extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        const title = this.props.location.state.title;
        const content = this.props.location.state.textBody;
        const index = this.props.location.state.index; 
        const select = this.props.location.state
        const tags = this.props.location.state.tags ;
        return (
          <div className="main-container">
            <div className = "create-note-form ">
              <div className = "full-note-header">

                <Link to = {{pathname: `/${this.props.match.params.id}/edit-note`, state: { select, title, content, index}}}><h6>edit</h6></Link> 
                <Link to = {{pathname: `/${this.props.match.params.id}/delete-note`, state: { select, title, content, index}}}><h6>delete</h6></Link>
              </div>
              <div className = "content-div">
                <h3>{title}</h3> 
                <p>{content}</p>
                <br/>
                <br/>
                <br/>
                <h5>Note Tags:</h5>
                {tags.map((tag, i) => <span key={i}>{tag}  </span>)}
              </div>
            </div>
          </div>
        
        )
    }
}

export default SearchFullNote; 