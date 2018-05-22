import React from 'react';
import { connect } from 'react-redux';

import { getTagOfNote, removeTagOfNote, applyTag } from '../actions';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { ComboBox } from 'office-ui-fabric-react/lib/ComboBox';

class TagOfNote extends React.Component {
  componentDidMount = () => {
    this.props.getTagOfNote(this.props.id)
  }
  render () {
  const { tags, getTagOfNote, removeTagOfNote, tagsOptions, applyTag } = this.props
  const noteId = this.props.id
  const tagsOptionsList = Object.keys(tagsOptions)
  .map(id => {
    return {
      key: id,
      text: tagsOptions[id].name
    }
  })
  return (
    <div style={style.root}>
      <ComboBox
        defaultSelectedKey='C'
        label='Apply Tags:'
        allowFreeform={ true }
        autoComplete='on'
        options={ tagsOptionsList }
        onChanged={val => applyTag({noteId, tagId: val.key, tagName: val.text})}
      />
      {
        tags &&
        Object.keys(tags).map(tagId =>
          <div key={tagId} style={style.tagWrapper}>
            <div style={style.tag}>
                <div style={style.hole}></div>
                <div style={style.tagName}>{tags[tagId]}</div>
            </div>
            <div className='ms-buttonArea'>
                <IconButton
                iconProps={ { iconName: 'RemoveFilter' } }
                onClick={() => removeTagOfNote(noteId, tagId) }
                />
            </div>
          </div>
        )
      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    tags: state.tagsReducer.tagOfNote,
    tagsOptions: state.tagsReducer.tags
  }
}

const style = {
  root: {
    padding: 10
  },
  tagWrapper: {
    display: 'flex',
    marginBottom: 5
  },
  tag: {
      padding: '5px 20px 5px 7px',
      borderRadius: '20px 0 0 20px',
      border: '1px solid #eaeaea',
      display: 'flex',
      color: '#666',
      flexGrow: 1,
      width: '70%',
  },
  tagName: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
  },
  hole: {
      width: 20,
      borderRadius: '50%',
      border: '1px solid #eaeaea',
      marginRight: 10
  }
}

export default connect(mapStateToProps, { getTagOfNote, removeTagOfNote, applyTag })(TagOfNote);