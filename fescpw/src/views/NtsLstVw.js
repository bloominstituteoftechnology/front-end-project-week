import React, { Component } from 'react'
import { connect } from 'react-redux';

import { ntsFth, ntsSgr } from '../redux/actions';

import NtsLst from '../components/NtsLst';

class NtsLstVw extends Component {
    componentDidMount() {
        this.props.ntsFth();
    }
  render() {
    return (
      <NtsLst {...this.props} ntssgr={this.props.ntsSgr} />
    );
  }
}

const mapStateToProps = state => ({
    nts_arr: state.ntsReducer.nts_arr
});

export default connect(mapStateToProps, { ntsFth, ntsSgr })(NtsLstVw);