import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import CSVLink from './CSVLink'

const ToolBar = ({ notes, showMenu }) => {
    return (
        <SideBar showMenu={showMenu}>
            <Section to='/' exact notes="true">
                <span className="icon" />
                <span className="title"/>
            </Section>
            <Section to='/select' select="true">
                <span className="icon" />
                <span className="title"/>
            </Section>
            <Seperator />
            <ToolBarLabel export="true"/>
            <StyledCSV data={notes}>
                <span className="icon" />
                <span className="title"/>
            </StyledCSV>
            <Seperator />
            <ToolBarLabel account="true"/>
            <Section to='/logout' logout="true">
                <span className="icon" />
                <span className="title"/>
            </Section>
        </SideBar>
    );
}

export default ToolBar;


const SideBar = styled.div`
    width: 280px;
    height: 100%;
    background-color: white;
    padding: 8px 0px;
    position: fixed;
    left: 0;
    transform: translateX(0);
    transition: all 450ms ease-in-out;
    a {
        text-decoration: none;
    }
    ${props => props.showMenu === false && css`
        transform: translateX(-280px)
    `}
`;

const StyledCSV = styled(CSVLink)`
    font-family: 'Open Sans';
    letter-spacing: .55px;
    width: 100%;
    height: 48px;
    padding: 4px 0px 4px 24px;
    border-bottom-right-radius: 25px; 
    border-top-right-radius: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(32, 33, 36);
    font-size: 13px;
    line-height: 40px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background-color: #e8e8e8;
    }
    a {
        text-decoration: none;
        opacity: 1;
    }
    &.active {
        background-color: #feefc3;
        span.icon {
            opacity: 1;
        }
    }
    span.title {
        margin-left: 32px;
        letter-spacing: 0.75px;
    }
    span.icon {
        width: 24px;
        height: 24px;
        background-size: 24px 24px;
        opacity: .54;
    }
    span.icon {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>')
    }
    span.title:after {
        content: 'CSV'
    }
`;

const Section = styled(NavLink)`
    font-family: 'Open Sans';
    letter-spacing: .55px;
    width: 100%;
    height: 48px;
    padding: 4px 0px 4px 24px;
    border-bottom-right-radius: 25px; 
    border-top-right-radius: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(32, 33, 36);
    font-size: 13px;
    line-height: 40px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background-color: #e8e8e8;
    }
    a {
        text-decoration: none;
        opacity: 1;
    }
    &.active {
        background-color: #feefc3;
        span.icon {
            opacity: 1;
        }
    }
    span.title {
        margin-left: 32px;
        letter-spacing: 0.75px;
    }
    span.icon {
        width: 24px;
        height: 24px;
        background-size: 24px 24px;
        opacity: .54;
        background-repeat: no-repeat;
    }
    ${props => props.notes && css`
        span.icon {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>')
        }
        span.title:after {
            content: 'Notes'
        }
    `}
    ${props => props.reminders && css`
        span.icon {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>')
        }
        span.title:after {
            content: 'Reminders'
        }
    `}
    ${props => props.select && css`
        span.icon {
            background-size: 24px 24px;
            background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ny43IDQ4Ny43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODcuNyA0ODcuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik04MC4yLDYyLjdjLTQuOC00LjgtMTIuNS00LjgtMTcuMy0wLjFDNTgsNjcuNCw1OCw3NS4xLDYyLjgsNzkuOUw5MiwxMDkuM2MyLjMsMi4zLDUuNCwzLjYsOC43LDMuNmwwLDAgICAgYzMuMiwwLDYuMy0xLjMsOC42LTMuNmw4OC45LTg4LjRjNC44LTQuOCw0LjgtMTIuNSwwLjEtMTcuM2MtNC44LTQuOC0xMi41LTQuOC0xNy4zLDBsLTI2LjksMjYuN0MxMzkuOCwxNS41LDExOS45LDcsOTksNyAgICBDNTYuNyw3LDIyLjMsNDEuNCwyMi4zLDgzLjdzMzQuNCw3Ni43LDc2LjcsNzYuN2MzNC4xLDAsNjMuNi0yMS45LDczLjUtNTQuNWMyLTYuNS0xLjctMTMuMy04LjItMTUuM2MtNi41LTEuOS0xMy4zLDEuNy0xNS4zLDguMiAgICBjLTYuNiwyMS44LTI3LjIsMzcuMS01MCwzNy4xYy0yOC44LDAtNTIuMi0yMy40LTUyLjItNTIuMlM3MC4yLDMxLjUsOTksMzEuNWMxNC4zLDAsMjcuOSw2LDM3LjcsMTYuMmwtMzUuOSwzNS43TDgwLjIsNjIuN3oiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNOTksMTcwLjZjLTQyLjMsMC03Ni43LDM0LjQtNzYuNyw3Ni43UzU2LjcsMzI0LDk5LDMyNHM3Ni43LTM0LjQsNzYuNy03Ni43UzE0MS4zLDE3MC42LDk5LDE3MC42eiBNOTksMjk5LjUgICAgYy0yOC44LDAtNTIuMi0yMy40LTUyLjItNTIuMnMyMy40LTUyLjIsNTIuMi01Mi4yczUyLjIsMjMuNCw1Mi4yLDUyLjJTMTI3LjgsMjk5LjUsOTksMjk5LjV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTE3NS43LDQxMWMwLTQyLjMtMzQuNC03Ni43LTc2LjctNzYuN1MyMi4zLDM2OC43LDIyLjMsNDExczM0LjQsNzYuNyw3Ni43LDc2LjdTMTc1LjcsNDUzLjMsMTc1LjcsNDExeiBNOTksNDYzLjMgICAgYy0yOC44LDAtNTIuMi0yMy40LTUyLjItNTIuMnMyMy40LTUyLjIsNTIuMi01Mi4yczUyLjIsMjMuNCw1Mi4yLDUyLjJTMTI3LjgsNDYzLjMsOTksNDYzLjN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTQ1My4xLDIzNUgyMTQuOGMtNi44LDAtMTIuMyw1LjUtMTIuMywxMi4zczUuNSwxMi4zLDEyLjMsMTIuM2gyMzguM2M2LjgsMCwxMi4zLTUuNSwxMi4zLTEyLjNTNDU5LjksMjM1LDQ1My4xLDIzNXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNDUzLjEsNzEuNUgyMTQuOGMtNi44LDAtMTIuMyw1LjUtMTIuMywxMi4zczUuNSwxMi4zLDEyLjMsMTIuM2gyMzguM2M2LjgsMCwxMi4zLTUuNSwxMi4zLTEyLjNTNDU5LjksNzEuNSw0NTMuMSw3MS41eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik00NTMuMSwzOTguOEgyMTQuOGMtNi44LDAtMTIuMyw1LjUtMTIuMywxMi4zczUuNSwxMi4zLDEyLjMsMTIuM2gyMzguM2M2LjgsMCwxMi4zLTUuNSwxMi4zLTEyLjMgICAgQzQ2NS40LDQwNC4yLDQ1OS45LDM5OC44LDQ1My4xLDM5OC44eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)
        }
        span.title:after {
            content: 'Multi select'
        }
    `}
    ${props => props.csv && css`
        span.icon {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>')
        }
        span.title:after {
            content: 'CSV'
        }
    `}
    ${props => props.logout && css`
        span.icon {
            background-size: 22px 24px;
            background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMjAuMDAyIDMyMC4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyMC4wMDIgMzIwLjAwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8ZyBpZD0iWE1MSURfNl8iPgoJPHBhdGggaWQ9IlhNTElEXzdfIiBkPSJNNTEuMjEzLDE3NS4wMDFoMTczLjc4NWM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1YzAtOC4yODQtNi43MTYtMTUtMTUtMTVINTEuMjEzbDE5LjM5NC0xOS4zOTQgICBjNS44NTgtNS44NTgsNS44NTgtMTUuMzU1LDAtMjEuMjEzYy01Ljg1Ny01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzLDBMNC4zOTYsMTQ5LjM5M2MtMC4zNTEsMC4zNTEtMC42ODMsMC43MTktMC45OTcsMS4xMDMgICBjLTAuMTM3LDAuMTY3LTAuMjU2LDAuMzQ0LTAuMzg1LDAuNTE1Yy0wLjE2NSwwLjIyLTAuMzM1LDAuNDM1LTAuNDg4LDAuNjY0Yy0wLjE0LDAuMjA5LTAuMjYxLDAuNDI2LTAuMzg5LDAuNjQgICBjLTAuMTIzLDAuMjA2LTAuMjUyLDAuNDA3LTAuMzY1LDAuNjE5Yy0wLjExOCwwLjIyLTAuMjE3LDAuNDQ2LTAuMzIzLDAuNjdjLTAuMTA0LDAuMjE5LTAuMjEzLDAuNDM1LTAuMzA2LDAuNjU5ICAgYy0wLjA5LDAuMjE5LTAuMTY0LDAuNDQyLTAuMjQzLDAuNjY0Yy0wLjA4NywwLjI0LTAuMTc5LDAuNDc3LTAuMjUzLDAuNzIyYy0wLjA2NywwLjIyMi0wLjExNiwwLjQ0Ny0wLjE3MiwwLjY3MiAgIGMtMC4wNjMsMC4yNDktMC4xMzMsMC40OTctMC4xODMsMC43NTFjLTAuMDUxLDAuMjU5LTAuMDgyLDAuNTIxLTAuMTE5LDAuNzgyYy0wLjAzMiwwLjIyMy0wLjA3NSwwLjQ0My0wLjA5NywwLjY2OSAgIGMtMC4wNDgsMC40ODQtMC4wNzMsMC45NzEtMC4wNzQsMS40NTdjMCwwLjAwNy0wLjAwMSwwLjAxNS0wLjAwMSwwLjAyMmMwLDAuMDA3LDAuMDAxLDAuMDE1LDAuMDAxLDAuMDIyICAgYzAuMDAxLDAuNDg3LDAuMDI2LDAuOTczLDAuMDc0LDEuNDU4YzAuMDIyLDAuMjIzLDAuMDY0LDAuNDQsMC4wOTUsMC42NjFjMC4wMzgsMC4yNjQsMC4wNjksMC41MjgsMC4xMjEsMC43OSAgIGMwLjA1LDAuMjUyLDAuMTE5LDAuNDk2LDAuMTgyLDAuNzQzYzAuMDU3LDAuMjI3LDAuMTA3LDAuNDU2LDAuMTc1LDAuNjgxYzAuMDczLDAuMjQxLDAuMTY0LDAuNDc0LDAuMjQ4LDAuNzEgICBjMC4wODEsMC4yMjYsMC4xNTUsMC40NTMsMC4yNDcsMC42NzVjMC4wOTEsMC4yMiwwLjE5OCwwLjQzMSwwLjMsMC42NDZjMC4xMDgsMC4yMjksMC4yMSwwLjQ2LDAuMzMsMC42ODUgICBjMC4xMSwwLjIwNSwwLjIzNSwwLjQsMC4zNTQsMC41OTljMC4xMzEsMC4yMjEsMC4yNTYsMC40NDQsMC40LDAuNjU5YzAuMTQ2LDAuMjE5LDAuMzA5LDAuNDI0LDAuNDY2LDAuNjM1ICAgYzAuMTM2LDAuMTgxLDAuMjYyLDAuMzY4LDAuNDA3LDAuNTQ0YzAuMjk5LDAuMzY0LDAuNjE2LDAuNzEzLDAuOTQ3LDEuMDQ4YzAuMDE2LDAuMDE2LDAuMDI5LDAuMDM0LDAuMDQ1LDAuMDVsNDUsNDUuMDAxICAgYzIuOTMsMi45MjksNi43NjgsNC4zOTQsMTAuNjA3LDQuMzk0YzMuODM4LTAuMDAxLDcuNjc4LTEuNDY1LDEwLjYwNi00LjM5M2M1Ljg1OC01Ljg1OCw1Ljg1OC0xNS4zNTUsMC4wMDEtMjEuMjEzTDUxLjIxMywxNzUuMDAxICAgeiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggaWQ9IlhNTElEXzhfIiBkPSJNMzA1LjAwMiwyNWgtMTkwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1djYwYzAsOC4yODQsNi43MTYsMTUsMTUsMTVzMTUtNi43MTYsMTUtMTVWNTVoMTYwdjIxMC4wMDFoLTE2MCAgIHYtNDUuMDAxYzAtOC4yODQtNi43MTYtMTUtMTUtMTVzLTE1LDYuNzE2LTE1LDE1djYwLjAwMWMwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDE5MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1VjQwICAgQzMyMC4wMDIsMzEuNzE2LDMxMy4yODYsMjUsMzA1LjAwMiwyNXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
        }
        span.title:after {
            content: 'Logout'
        }
    `}
`;

const Seperator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin: 8px 0px;
`;

const ToolBarLabel = styled.div`
    margin-top: 15px;
    padding-left: 24px;
    margin-bottom: 5px;
    height: 31px;
    line-height: 31px;
    font-family: 'Roboto';
    font-size: 11px;
    font-weight: 600;
    color: #5f6368;
    letter-spacing: 0.8px;
    &::after {
        ${props => props.account && css`
            content: 'ACCOUNT';
        `}
        ${props => props.export && css`
            content: 'EXPORT';
        `}
    }
`;

