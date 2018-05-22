import React from 'react';
import { connect } from 'react-redux';

import { showEditTagBox } from '../actions';

import { IconButton } from 'office-ui-fabric-react/lib/Button';

const Tag = ({ id, name, showEditTagBox }) =>
    <div style={style.root}>
        <div style={style.tag}>
            <div style={style.hole}></div>
            <div style={style.tagName}>{name}</div>
        </div>
        <div className='ms-buttonArea'>
            <IconButton
            iconProps={ { iconName: 'Edit' } }
            onClick={() => showEditTagBox({id, name}) }
            />
        </div>
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
    },
    extraHeight: {
        height: 100
    }
}

const mapStateToProps = (state) => {
    return state.tagsReducer
}

export default connect(mapStateToProps, { showEditTagBox })(Tag);