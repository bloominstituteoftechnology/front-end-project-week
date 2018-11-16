import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import {FlexRow, Button, Search} from "./Styled";
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

class TopBar extends Component {
    loadMore = () => {
        this.props.getNotes()
    };

    render() {
        return (
            <Bar justifyBetween>
                <FlexRow>
                    <Link to="/create"><Button primary style={{marginRight: "10px"}}>ADD NOTE</Button></Link>
                    <Button inverted onClick={this.loadMore}>LOAD NOTES</Button>
                </FlexRow>

                <Search />
            </Bar>
        );
    }
}

TopBar.propTypes = {};

export default connect(()=>{}, {getNotes})(withRouter(TopBar));

