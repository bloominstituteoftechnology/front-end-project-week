import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SideNav extends Component {
  logout = () => {
    localStorage.removeItem('token')
  }

  render () {
    let { tags } = this.props
    console.log('IN SIDENAV TAGS', tags)
    const flatten = function (arr, result = []) {
      for (let i = 0, length = arr.length; i < length; i++) {
        const value = arr[i]
        if (Array.isArray(value)) {
          flatten(value, result)
        } else {
          result.push(value)
        }
      }
      return result
    }
    let filteredTags = [ ...new Set(flatten(tags)) ].filter(
      (tag) => tag.length >= 1
    )
    console.log(filteredTags)
    return (
      <div className='sideNav'>
        <Link className='logout-Btn' to='/' onClick={this.logout}>
          Log out
        </Link>
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
          {filteredTags.map((tag, index) => {
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
