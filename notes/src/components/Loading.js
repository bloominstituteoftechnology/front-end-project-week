import React, {Component} from 'react';
import styled from 'styled-components';

class Loding extends Component {
    render() {
        return (
            <LoadingContainer>
                <img alt={"loading"} src={'https://orig00.deviantart.net/df77/f/2013/094/8/d/loading_logofinal_by_zegerdon-d60eb1v.gif'}/>
            </LoadingContainer>
        )}
}

export default Loding;

const LoadingContainer = styled.div`
        text-align:center;
`;