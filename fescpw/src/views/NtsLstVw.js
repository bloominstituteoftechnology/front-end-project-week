import React, { Component } from 'react'
import { connect } from 'react-redux';

import { ntsFth, ntsSgr } from '../redux/actions';

import NtsLst from '../components/NtsLst';

import NtsMnuVw from './NtsMnuVw';

class NtsLstVw extends Component {
    componentDidMount() {
        this.props.ntsFth();
    }
  render() {
    return (
        <div>
            <NtsMnuVw />
            <NtsLst {...this.props} ntssgr={this.props.ntsSgr} />
        </div>
    );
  }
}

const mapStateToProps = state => ({
    nts_arr: state.ntsReducer.nts_arr
});

export default connect(mapStateToProps, { ntsFth, ntsSgr })(NtsLstVw);