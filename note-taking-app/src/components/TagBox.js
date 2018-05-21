import React from 'react';
import { connect } from 'react-redux';

import Tag from './Tag';

import { getTags } from '../actions';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

class TagBox extends React.Component {
  componentDidMount = () => {
    this.props.getTags()
  }
  render() {
    const { tags, getTags, isFetching } = this.props
    return(
      <div style={style.root}>
        { 
          isFetching? 
          ('Loading...')
          :
          (
            <div>
              <div style={style.newTagInput}>
                <TextField
                  placeholder='Create New Tag...'
                  onChanged={() => console.log('typing on tag textfield')}
                />
                <IconButton
                  iconProps={ { iconName: 'CirclePlus' } }
                  onClick={() => console.log('save tag')}
                />
              </div>
              {Object.keys(tags).map((id) => {
                return (
                  <Tag key={id} {...tags[id]}/>
                )
              })}
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
  newTagInput: {
    marginBottom: 7,
    display: 'flex'
  }
}

export default connect(mapStateToProps, { getTags })(TagBox);