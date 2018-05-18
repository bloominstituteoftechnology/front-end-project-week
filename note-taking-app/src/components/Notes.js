import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNotes, selectNote } from '../actions';

import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardActions
} from 'office-ui-fabric-react/lib/DocumentCard';

class Notes extends Component {
  render() {
    const { notes, selectNote } = this.props
    return (
      <div>
        <h3>Your Notes:</h3>
        { notes.map(({id, title, content}) => 
        <div key={id} className='ms-Grid-col ms-sm12 ms-lg4' style={style.extraMargin}>
          <DocumentCard  onClick={() => selectNote({id, title, content})}>
            <DocumentCardTitle title={title} />
            <div className='ms-ConversationTile-TitlePreviewArea' >
              <DocumentCardTitle title={content} shouldTruncate={ true } showAsSecondaryTitle={ true } />
            </div>
            <DocumentCardActions
              actions={
                [
                  {
                    iconProps: { iconName: 'Share' },
                  },
                  {
                    iconProps: { iconName: 'Pin' },
                  },
                  {
                    iconProps: { iconName: 'Ringer' },
                  },
                ]
              }
            />
          </DocumentCard>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.notesReducer
}

const style = {
  extraMargin: {
    marginBottom: 10
  }
}

export default connect(mapStateToProps, { getNotes, selectNote })(Notes);