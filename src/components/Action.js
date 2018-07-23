import React from 'react';

// This stateless function replaced code right below it
const Action = (props) => {
  return (
    <div>
      <button
      className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        > What Note Do You Want?
      </button>
    </div>
  )
  }
  
  /*
  class Action extends React.Component {
    // This is a method below which is called on the button
    render() {
        return (
            <div>
              <button
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                > What Should I Do?
              </button>
            </div>
        )
    }
  }
  */

  export default Action