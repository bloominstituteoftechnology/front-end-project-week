import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SideNav extends Component {
  render () {
    return (
      <div className='sideNav'>
        <Link className='lambda-logo' to='/'>
          <h1 className='sideNav-header'>Lambda </h1>
          <h1 className='sideNav-header'>Notes</h1>
        </Link>
        <Link className='sidenav-button' to='/'>
          View Your Notes
        </Link>
        <Link className='sidenav-button' to='/notes/new'>
          + Create New Note
        </Link>
        <div className='tag-list'>
          {this.props.tags.map((tag, index) => {
            return <h2 key={tag + index}>{`#${tag}`}</h2>
          })}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    tags: state.tags
  }
}
export default connect(mapStateToProps, null)(SideNav)
