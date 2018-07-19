import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SideNav extends Component {
  render () {
    let { tags } = this.props
    return (
      <div className='sideNav'>
        <Link className='lambda-logo' to='/'>
          <h1 className='sideNav-header'>Lambda </h1>
          <h1 className='sideNav-note-header'>Notes</h1>
        </Link>
        <Link className='sidenav-button' to='/'>
          View Your Notes
        </Link>
        <Link className='sidenav-button' to='/notes/new'>
          + Create New Note
        </Link>

        {tags.map((tag, index) => {
          return (
            <div
              onClick={() => this.props.getTag(`${tag}`)}
              className='tag fas fa-tag fa-lg tag-list'
              key={tag + index}
            >
              {`${tag}`}
            </div>
          )
        })}
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
