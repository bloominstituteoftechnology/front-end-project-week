import React, { Component } from 'react';
import './components.css'
import { connect } from 'react-redux';

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notetitle: null,
            notetext: null
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState(() => ({ notetitle: this.props.cardinfo[id].title, notetext: this.props.cardinfo[id].content }));
    }

    componentWillReceiveProps(newProps){
        if(this.props.match.params.id !== newProps.match.params.id){
          this.componentDidMount();
        }
      }

    render() {
        return (
            <div className="ViewNote__Container">
            <div className="ViewNote__Title">
                <h4>{this.state.notetitle}</h4>
            </div>
            <div className="ViewNote__Content">
            {this.state.notetext}
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      cardinfo: state
    };
  }
  
export default connect(mapStateToProps)(ViewNote);