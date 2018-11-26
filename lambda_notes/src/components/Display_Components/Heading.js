import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Heading(props) {
  return (
    <div>
        <h2>{props.notePath}</h2>
    </div>
  )
}

const mapStateToProps =()=> {
  return {}
}

export default withRouter(connect(mapStateToProps,)(Heading));