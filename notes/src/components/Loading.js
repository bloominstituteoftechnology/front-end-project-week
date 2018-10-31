import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <StyledLoading>
            <svg className="load" x="0px" y="0px" viewBox="0 0 150 150">
                <circle className="circle" cx="75" cy="75" r="60"></circle>
            </svg>
            <p data-text="loading...">loading...</p>
        </StyledLoading>
    );
}

export default Loading;

const StyledLoading = styled.div`
    position: fixed;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);
    p {
        color: rgba(150,150,150,1);
        font-family: Helvetica;
        position: relative;
        :before {
            content: attr(data-text);
            position: absolute;
            overflow: hidden;
            max-width: 4.2em;
            white-space: nowrap;
            color: rgba(255,255,255,1);
            animation: text 3s linear infinite;
        }
    }
    .load{
        width: 100px;
        height: 100px;
        animation: loading 3s linear infinite;
    }
    
    .circle {
        stroke: white;
        fill: transparent;
        animation: circle 3s linear infinite;
        stroke-dashoffset: 0;
        stroke-dasharray: 300;
        stroke-width: 10;
        stroke-miterlimit: 10;
        stroke-linecap: round;
    }
    @keyframes loading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes circle {
        0% {
            stroke-dashoffset: 0;
            stroke-width: 8;
        }
        50% {
            stroke-width: 1;
        }
        100% {
            stroke-dashoffset: -600;
            stroke-width: 8;
        }
    }
    @keyframes text {
        0% {
            max-width: 0;
        }
    }
`;
