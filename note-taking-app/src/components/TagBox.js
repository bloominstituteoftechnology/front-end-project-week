import React from 'react';
import { connect } from 'react-redux';

import Tag from './Tag';
import AddTagForm from './AddTagForm';
import NoteSearchBox from './NoteSearchBox';

import { getTags, hideEditTagBox } from '../actions';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';

class TagBox extends React.Component {
  componentDidMount = () => {
    this.props.getTags()
  }
  render() {
    const { tags, getTags, isFetching, showEditTagBox, hideEditTagBox, editTagBoxOpen } = this.props
    return(
      <div style={style.root}>
        { 
          isFetching? 
          ('Loading...')
          :
          (
            <div>
            <div ref={editTagButton => this.editTagButtonElement = editTagButton } className='ms-CalloutCoverExample-buttonArea'>
              <AddTagForm />
              {tags && Object.keys(tags).map((id) => {
                return (
                  <Tag key={id} {...tags[id]} id={id}/>
                )
              })}
            </div>
            <Callout
              className='ms-CalloutExample-callout'
              target={ this.editTagButtonElement }
              onDismiss={ hideEditTagBox }
              setInitialFocus={ true }
              hidden={ !editTagBoxOpen }
              directionalHint={DirectionalHint.rightTopEdge}
              isBeakVisible={ false }
              gapSpace={0}
          >
              <div className='ms-CalloutExample-inner' style={style.extraHeight}>
              <NoteSearchBox />
              </div>
          </Callout>
          </div>
          )
          
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.tagsReducer
}

const style = {
  root: {
    padding: 10,
    width: 200
  },
}

export default connect(mapStateToProps, { getTags, hideEditTagBox })(TagBox);