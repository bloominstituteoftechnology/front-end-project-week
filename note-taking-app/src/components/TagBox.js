import React from 'react';
import { connect } from 'react-redux';

import Tag from './Tag';
import AddTagForm from './AddTagForm';
import UpdateTagForm from './UpdateTagForm';
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
      <div style={style.root} ref={editTagButton => this.editTagButtonElement = editTagButton }>
        { 
          isFetching? 
          ('Loading...')
          :
          (
            <div>
              <div className='ms-CalloutCoverExample-buttonArea'>
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
                gapSpace={10}
              >              
                <UpdateTagForm />
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
    width: 300
  },
}

export default connect(mapStateToProps, { getTags, hideEditTagBox })(TagBox);