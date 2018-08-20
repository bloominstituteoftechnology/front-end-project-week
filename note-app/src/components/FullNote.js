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
        return (
          <div>
            <div className = "full-note-header">
              <h6>edit</h6>
              <h6>delete</h6>
            </div>
            <h3>{title}</h3> 
            <p>{content}</p>
          </div>
        
        )
    }
}

export default FullNote; 