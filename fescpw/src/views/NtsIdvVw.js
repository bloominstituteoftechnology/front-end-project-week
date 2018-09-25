import React, { Component } from 'react'
import { connect } from 'react-redux';

import { ntsFth, ntsGpe, ntsRmv } from '../redux/actions';

import NtsIdv from '../components/NtsIdv';

class NtsIdvVw extends Component {
    componentDidMount() {
        if (this.props.nts_arr.length === 0) {
            this.props.ntsFth();
        }
    }

    hdldltnt = ntsidf => {
        this.props.ntsRmv(ntsidf);
    }

    redrtfrm = (event, id) => {
        event.preventDefault();
        this.props.ntsGpe(id);
        this.props.history.push("/nts-frm")
    }
  render() {
    return (
      <NtsIdv {...this.props} 
        hdldltnt={this.hdldltnt}
        redrtfrm={this.redrtfrm}
        nts_fthg={this.props.nts_fthg}
        nts_fthd={this.props.nts_fthd}
        nts_arr={this.props.nts_arr}
        nts_idv={this.props.nts_idv}
      />
    )
  }
}

const mapStateToProps = state => ({
    nts_fthg: state.ntsReducer.nts_fthg,
    nts_fthd: state.ntsReducer.nts_fthd,
    nts_arr: state.ntsReducer.nts_arr,
    nts_idv: state.ntsReducer.nts_idv
})

export default connect(mapStateToProps, { ntsFth, ntsGpe, ntsRmv })(NtsIdvVw);