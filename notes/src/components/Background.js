import React, { Component } from 'react';
import styled from 'styled-components';


class Background extends Component {
    render() {
        return (
            <BackgroundShape>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1800 4041"
            >
                <path 
                    id="Landing_Bgd_svg" 
                    d="M-2209-217.652S-2053.2-469.609-1458-577s838.464-682,838.464-682H-2209Z" 
                    transform="translate(2209 1100)"
                ></path>
            </svg>
            </BackgroundShape>
        );
    }
}

export default Background;

const BackgroundShape = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: -1;
    fill: #F5B401;
    transform: rotate(180deg);
`;
