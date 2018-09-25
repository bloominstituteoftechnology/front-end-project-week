import React, { Component } from 'react'
import { connect } from 'react-redux';

import { ntsCrt, ntsEdt } from '../redux/actions';

import NtsFrm from '../components/NtsFrm';

class NtsFrmVw extends Component {
    state = {
        ntsidv: {
            title: "",
            textBody: "",
            tags: []
        },
        nts_edtg: false
    }
    componentDidMount() {
        if (this.props.nts_tbu) {
            this.setState({ nts_edtg: true, ntsidv: this.props.nts_tbu });
        }
    }

    hdlchg = event => {
        if (event.target.name === "tags") {
            const tags = event.target.value.split(", ");
            this.setState({
                ntsidv: {
                    ...this.state.ntsidv,
                    tags,
                }
            });
        } else {
            this.setState({
                ntsidv: {
                    ...this.state.ntsidv,
                    [event.target.name]: event.target.value
                }
            });
        }
    }

    hdlcrt = (event) => {
        event.preventDefault();
        this.props.ntsCrt(this.state.ntsidv);
        this.props.history.push("/nts");
    }

    hdledt = () => {
        this.props.ntsEdt(this.state.ntsidv);
        this.props.history.push("/nts");
    }
  render() {
    return (
      <NtsFrm {...this.props} 
        ntsidv={this.state.ntsidv}
        ntsedtg={this.state.nts_edtg}
        hdlchg={this.hdlchg}
        hdlcrt={this.hdlcrt}
        hdledt={this.hdledt}
      />
    )
  }
}

const mapStateToProps = state => ({
    nts_tbu: state.ntsReducer.nts_tbu,
});

export default connect(mapStateToProps, { ntsCrt, ntsEdt })(NtsFrmVw);