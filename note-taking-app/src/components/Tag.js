import React from 'react';
import { connect } from 'react-redux';

import {
    DocumentCard,
    DocumentCardTitle,
    DocumentCardActions
} from 'office-ui-fabric-react/lib/DocumentCard';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

const Tag = ({ name }) =>
    <div style={style.root}>
        <div style={style.tag}>
            <div style={style.hole}></div>
            {name}
        </div>
        <IconButton
          iconProps={ { iconName: 'Edit' } }
          onClick={() => console.log('update tag or open update form')}
        />
    </div>

const style = {
    root: {
        display: 'flex',
        marginBottom: 5
    },
    tag: {
        padding: '5px 20px 5px 7px',
        borderRadius: '20px 0 0 20px',
        border: '1px solid #eaeaea',
        display: 'flex',
        color: '#666',
        flexGrow: 1
    },
    hole: {
        width: 20,
        borderRadius: '50%',
        border: '1px solid #eaeaea',
        marginRight: 10
    }
}

export default Tag;