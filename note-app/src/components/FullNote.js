import React from 'react'


class FullNote extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        const title = this.props.ct;
        const content = this.props.cc;
        const index = this.props.index;  
        return (
          <div className = "create-note-form ">
            <div className = "full-note-header">
              <h6>edit</h6>
              <h6>delete</h6>
            </div>
            <div className = "content-div">
              <h3>{title}</h3> 
              <p>{content}</p>
            </div>
          </div>
        
        )
    }
}

export default FullNote; 