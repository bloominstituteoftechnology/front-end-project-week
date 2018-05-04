import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import "../App.css";
import { editNote } from '../Actions';


const mapStateToProps = (state) => {
    return ({
        notes: state.notes
    })     
}

class Edit extends Component {


}

export default connect(mapStateToProps, { editNote })(Edit);