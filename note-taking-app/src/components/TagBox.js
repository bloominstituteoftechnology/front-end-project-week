import React from 'react';
import { connect } from 'react-redux';

import Tag from './Tag';
import AddTagForm from './AddTagForm';

import { getTags } from '../actions';

import { TextField } from 'office-ui-fabric-react/lib/TextField';

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
              <AddTagForm />
              {tags && Object.keys(tags).map((id) => {
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
}

export default connect(mapStateToProps, { getTags })(TagBox);