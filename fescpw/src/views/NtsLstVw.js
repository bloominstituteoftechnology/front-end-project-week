import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { srhEdt, ntsFth, ntsSgr } from '../redux/actions';

import NtsLst from '../components/NtsLst';

import NtsMnuVw from './NtsMnuVw';

const NtsFltCtnr = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const NtsFltIpt = styled.input`
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;

    :focus {
        outline: none;
    }
`;

class NtsLstVw extends Component {
    componentDidMount() {
        this.props.ntsFth();
    }

  render() {
    //   if (this.props.nts_fthg) {
    //       return (
    //           <h1>Loading...</h1>
    //       )
    //   }
      const ntsflt = this.props.nts_arr.filter(ntsidv => {
          return ntsidv.title.toLowerCase().includes(this.props.srhfd.toLowerCase());
      })
    return (
        <div>
            <NtsMnuVw />
                <NtsFltCtnr>
                    <NtsFltIpt onChange={(event) => this.props.srhEdt(event.target.value)} />
                </NtsFltCtnr>
            <NtsLst {...this.props} 
                ntssgr={this.props.ntsSgr}
                ntsflt={ntsflt} 
            />
        </div>
    );
  }
}

const mapStateToProps = state => ({
    srhfd: state.srhReducer.srhfd,
    nts_fthg: state.ntsReducer.nts_fthg,
    nts_fthd: state.ntsReducer.nts_fthd,
    nts_arr: state.ntsReducer.nts_arr
});

export default connect(mapStateToProps, { srhEdt, ntsFth, ntsSgr })(NtsLstVw);