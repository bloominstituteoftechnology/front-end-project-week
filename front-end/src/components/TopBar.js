import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import {FlexRow, FlexColumn, Button, Search} from "./Styles/Components";
import {getNotes} from "../actions";
import {connect} from "react-redux";

const Bar = styled(FlexRow)`
    background: #333333;
    padding: 20px;
    width: 100vw;
    height: 72px;
    color: #8C8C8C;
    box-sizing: border-box;
`;

const Sort = styled(FlexRow)`
    position: relative;
    cursor: pointer;
    align-items: center;
    margin-right: 20px;
    border: thin solid #c8c7c7;
    border-radius: 6px;
    padding: 20px 10px;
    height: 38px;
    box-sizing: border-box;
    z-index: 9;
    &:hover {
        background: #c8c7c7
        color: black;
    }
    
    span {
        margin-right: 10px;
        font-size: 1.6rem;
    }
`;

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 8;
    // background: rgba(255, 255, 255, 0.5490196078431373);
`;

const Menu = styled(FlexColumn)`
  position: absolute;
  width: 100px;
  background: #eee3e3;
  border-color: #eee #eaeaea #e0e0e0;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  box-shadow: 0 1px 17px rgba(0, 0, 0, 0.22);
  color: #333;
  z-index: 10;
  bottom: -45px;
  left: 0;

  span {
    padding: 10px 10px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 6px;

    &:hover {
      background: lightgrey;
    }
  }
`;

const ArrowDown = styled.div`
  width: 0; 
  height: 0; 
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  
  border-top: 6px solid #c8c7c7
`;

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSort: false,
            filter: "",
            sort: ""
        };

        this.throttle = false;
    }

    loadMore = () => {
        this.props.getNotes()
    };

    filter = e => {
        this.setState({filter: e.target.value});
        if (!this.throttle) {
            this.throttle = true;
            setTimeout(() => {
                this.props.getNotes(this.state);
                this.throttle = false;
            }, 800)
        }

    };

    sort = sort => {
        this.setState({sort: sort}, () => this.props.getNotes(this.state));
    };

    render() {
        const {showSort} = this.state;

        return (
            <Bar justifyBetween>
                <FlexRow>
                    <Link to="/create"><Button primary style={{marginRight: "10px"}}>ADD NOTE</Button></Link>
                    <Button inverted onClick={this.loadMore}>LOAD NOTES</Button>
                </FlexRow>

                <FlexRow alignCenter>
                    <Sort onClick={() => this.setState({showSort: !showSort})}>
                        <span>Sort By</span>
                        <ArrowDown/>

                        {showSort && <>
                            <MenuContainer onClick={() => this.setState({showSort: !showSort})}/>

                            <Menu>
                                <span onClick={() => this.sort("title")}>Title</span>
                            </Menu>
                        </>}
                    </Sort>

                    <Search placeholder="Search" onChange={e => this.filter(e)}/>
                </FlexRow>
            </Bar>
        );
    }
}

TopBar.propTypes = {};

export default connect(() => {
}, {getNotes})(withRouter(TopBar));

