import React from 'react';


class Note extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        const title = this.props.title;
        const lengthPercentage = Math.floor(this.props.content.length * .05) 
        const partialContent = this.props.content.slice(0, lengthPercentage); 
        const index = this.props.index; 
        return (

            <div className = "individual-note" onClick = {() => this.props.click(index)}>
              <h2 className = "individual-title">{title}</h2>
              <br/>
              <hr className = "note-hr"/>
              <p className ="individual-content">{partialContent}</p>
            </div>
        )
    }
}

export default Note; 