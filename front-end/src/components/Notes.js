import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getNotes, editNote } from '../actions'
import { FlexRow } from './Styles/Components'
import Note from './Note'
import CreateNote from './CreateNote'
import NoteView from './ViewNote'
import NoteEdit from './EditNote'
import { Modal, Margin } from './Styles/Components'
import { InvertedColor } from './Styles/Colors'
import InfiniteScroll from 'react-infinite-scroller'

const Container = styled(FlexRow)`
    color: #8C8C8C;
    background: #333333;
    overflow: auto;
    padding: 50px;
    box-sizing: border-box;
`

const Loading = styled.div`
    font-size: 1.8rem;
    color: white;
`

class Notes extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notes: [],
      dragStart: null,
      dragEnd: null,
      dragEl: null,
      page: 0,
      pageSize: 10,
      hasMore: true
    }
  }

  componentDidMount () {
    const { page, pageSize } = this.state
    this.props.getNotes({ page, pageSize })
  }

  componentWillReceiveProps (nextProps) {
    let notes = this.state.notes

    if (nextProps.notes && nextProps.notes.length) {
      const ind = notes.findIndex(n => n.id === nextProps.notes[0].id)

      if (ind === -1) {
        this.setState({ notes: [...notes, ...nextProps.notes] })
      }
    }
  }

  handleDragOver = (e, i) => {
    e.target.style.width = '450px'
    this.setState({ dragEnd: i })
  }

  handleDragLeave = (e) => {
    let target = e.target

    setTimeout(() => {
      target.style.width = '40px'
    }, 250)
  }

  handleDragDrop = () => {
    let { notes, dragEnd, dragStart, dragEl } = this.state
    if (dragStart > dragEnd) {
      dragEnd = dragEnd + 1
    }

    notes.splice(dragStart, 1)
    notes.splice(dragEnd, 0, dragEl)
    this.setState({ notes })
  }

  loadMore = () => {
    let { page, pageSize } = this.state
    this.props.getNotes({ page, pageSize }).then(() => this.setState({ hasMore: true }))
    this.setState({ page: page + 1, hasMore: false })
  }

  render () {
    const { loading, error } = this.props
    const { notes, hasMore } = this.state

    return (

      <Container width="100%" height="200px" grow wrap justifyCenter>
        {error && <><h1>Error</h1><p>{error}</p></>}
        <InfiniteScroll
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={hasMore}
          useWindow={false}
        >

          {!error && notes.length && notes.map((note, i) => {
            return (
              <FlexRow key={i}>
                <Link to={`/note/${note.id}`}>
                  <Note note={note}
                        handleDragStart={() => this.setState({ dragStart: i, dragEl: note })}
                        handleDragDrop={this.handleDragDrop}/>
                </Link>

                <Margin height="350px" width="40px" onDragOver={e => this.handleDragOver(e, i)}
                        onDragLeave={e => this.handleDragLeave(e)}/>
              </FlexRow>
            )

          })}

          {loading && <Loading>Loading...</Loading>}

        </InfiniteScroll>

        <Route path="/note/:id" render={({ match }) => <NoteView id={match.params.id}/>}/>
        <Route path="/create/" render={() => <CreateNote/>}/>
        <Route path="/edit/:id" render={({ match }) => <NoteEdit id={match.params.id}/>}/>
      </Container>
    )
  }
}

Notes.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      textBody: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string)
    }))
}

const mapStateToProps = ({ loading, error, notes }) => {
  return {
    loading,
    error,
    notes
  }
}

export default connect(mapStateToProps, { getNotes, editNote })(Notes)
