import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SideNav extends Component {
  render () {
    let { tags } = this.props
    return (
      <div className='sideNav'>
        <div className='logout-Btn' onClick={this.props.logOut}>
          Log out
        </div>
        <Link className='lambda-logo' to='/'>
          <div onClick={() => this.props.handleClear()}>
            <h1 className='sideNav-header'>Lambda </h1>
            <h1 className='sideNav-note-header'>Notes</h1>
          </div>
        </Link>
        <Link className='sidenav-button' to='/'>
          View Your Notes
        </Link>
        <Link className='sidenav-button' to='/notes/new'>
          + Create New Note
        </Link>
        <ul>
          {tags.map((tag, index) => {
            return (
              <li
                onClick={() => this.props.getTag(`${tag}`)}
                className='tag fas fa-tag fa-lg tag-list'
                key={tag + index}
              >{`${tag}`}</li>
            )
          })}
        </ul>
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
