import React from 'react';

class GotOne extends React.Component {
  componentDidMount() {
    
  }
  render() {
    const {textBody, title} = this.props.location.state.note;
    return (
      <div className="note-card" style={{height: '100vh'}}>
        <h2 className="single-card-title">{title}</h2>
        <p className="single-card-text">{textBody}</p>
      </div>
    )
  }
}

export default GotOne;